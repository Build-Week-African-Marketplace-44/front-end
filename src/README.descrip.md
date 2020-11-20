In this project, our team created an app that connects small grocery/market owners with other owners throughout Africa so that they can buy goods from other small grocery/market owners at a fair price and see what the market value is for thier product.

Components - This app has components that have state managed on a global and component level.

1. Landing - This page is the first page users will see and contains the login/     signup links.

2. Login/Signup - These pages will allow the user to login or sign up for an account.

3. Dashboard - The dashboard connects all pages in the private route beyond the marketing and log in pages. It allows users to access all other components no matter what page they are looking at.

4. MyItemsList - When the user purchases a product from the marketplace, it will appear in their store with the ability to delete it with an axios.delete post.

5. ItemsList - This is the marketplace where products from all sellers throughout Africa are displayed and can be purchased.

6. Item - This is where an axios.get request retrieves information about each item.

7. ItemPage - This component is where the item details are mapped to the marketplace.

8. NewItemForm - This component allows the user to add new items that they are selling which then get populated to the marketplace. An axios.put is used.

9. ProfileForm - This is where the user can update their profile information.

Axios calls -
Axios.get(https://african-marketplace-back-end.herokuapp.com/items)

Axios.delete(https://african-marketplace-back-end.herokuapp.com/items/id)
