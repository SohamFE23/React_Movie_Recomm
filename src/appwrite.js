import {Client, Databases, ID, Permission, Query, Role} from 'appwrite'

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT || 'https://fra.cloud.appwrite.io/v1';

const client = new Client()
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID);
const database = new Databases(client);


export const updateSearchCount = async(searchTerm, movie) => {
    //1. Use the Appwrite SDK to update the search count in the database
    try{
        const normalizedSearchTerm = searchTerm.trim().toLowerCase();
        if (!normalizedSearchTerm || !movie) {
            return;
        }

        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, []);
    //2. If it does, update the count
        const document = result.documents.find(
            (item) => item.searchTerm?.toLowerCase() === normalizedSearchTerm
        );

        if(document){
            await database.updateDocument(DATABASE_ID, COLLECTION_ID, document.$id, {
                count: document.count + 1,
            });   
        }
        //3. If it doesn't , create a new document with the search term and count as 1

        else{
            await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
                searchTerm: normalizedSearchTerm,
                count: 1,
                movie_id: String(movie.id),
                poster_url: movie.poster_path || null,
            }, [
                Permission.read(Role.any()),
                Permission.update(Role.any()),
            ])
        }
    }catch(error){
        console.error('Error updating search count:', error);
        throw error;
    }

}
export const getTrendingMovies = async() => {
    try{
        const result = await database.listDocuments(DATABASE_ID,COLLECTION_ID,[
            Query.limit(5),
            Query.orderDesc("count")
        ])
        return result.documents;
    }catch(error){
        console.error('Error fetching trending movies:', error);
    }
}