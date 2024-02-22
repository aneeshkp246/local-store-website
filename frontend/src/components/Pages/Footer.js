import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export const Footer= () => 
{
    return(
        <div class="container">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Cart</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Contact Us</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
    </ul>
    <p class="text-center text-body-secondary">&copy; 2023 Local Store, Inc</p>
  </footer>
</div>
    )
}
export default Footer;
