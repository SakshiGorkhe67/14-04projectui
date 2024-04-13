//base url
import axios from 'axios';

const API_URL="http://localhost:8085";
class ProductService{
 saveProduct(product){
    return axios.post(API_URL+"/saveProduct",product);
 }
 /*uploadImage( imageData) {
   // Append the product ID to the API URL
   const uploadUrl = '${API_URL}/uploadImage';

   // Create a FormData object and append the image data
   const formData = new FormData();
   formData.append('image', imageData);

   // Send a POST request to the upload URL with the FormData
   return axios.post(uploadUrl, formData, {
       headers: {
           'Content-Type': 'multipart/form-data'
       }
   });
}*/
 getAllProduct(){
    return axios.get(API_URL+"/getAllProducts");
 }
 getProductById(id){
    return axios.get(API_URL+"/getProductById/"+id);
 }
 deleteProduct(id){
    return axios.delete(API_URL+"/deleteProduct/"+id);
 }
 
 updateProduct(product){
    return axios.put(API_URL+"/updateProduct/"+product.id,product);
 }

}
export default new ProductService;