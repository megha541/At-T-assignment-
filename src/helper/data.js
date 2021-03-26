export const getCustomerOrder = async (id) =>{
    const response = await fetch("mockData.json",{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
    );
    const data = await response.json();
    return data;
}
