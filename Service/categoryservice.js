//base url
import axios from 'axios';

const API_URL = "http://localhost:8081";

class categoryService {
  saveCategory(category) {
    return axios.post(API_URL + "/api/categories/", category);
  }

  getAllCategory() {
   return axios.get(API_URL + "/api/categories/")
     .catch(error => {
       console.error('Error fetching categories:', error);
       throw error; // Re-throw the error to propagate it further if needed
     });
 }
  getCategoryById(id) {
    return axios.get(API_URL + "/api/categories/" + id);
  }

  deleteCategory(id) {
    return axios.delete(API_URL + "/api/categories/" +id); // Fixed typo here
  }

  updateCategory(category) {
    return axios.put(API_URL + "/api/categories/" + category.id, category);
  }
}

export default new categoryService();
