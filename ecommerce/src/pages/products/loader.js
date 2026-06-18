import axios from "axios";
export async function loader()
{
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
}

