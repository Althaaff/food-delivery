import {
  BarChart,
  SearchRounded,
  ShoppingCartRounded,
} from "@mui/icons-material";
import React, { useEffect } from "react";

const Header = () => {
  // useEffect(() => {
  //   const toggleMenu = document.querySelector('.toggleMenu');

  //   toggleMenu.addEventListener('click', () => {
  //     document.querySelector('.rightMenu').classList.toggle('active');
  //     console.log('toggle clicked');
  //   })

  //   return () => {
  //     toggleMenu.removeEventListener('click', handleToggle);
  //   };
  // },[])


useEffect(() => {
  const toggleMenu = document.querySelector('.toggleMenu');
  const rightMenu = document.querySelector('.rightMenu');

  if (toggleMenu && rightMenu) {
    const handleToggle = () => {
      rightMenu.classList.toggle('active');
      console.log('toggle clicked');
    };

    toggleMenu.addEventListener('click', handleToggle);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      toggleMenu.removeEventListener('click', handleToggle);
    };
  }
}, []);

  return (
    <header>
      <img
        className="logo"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAACUCAMAAABY3hBoAAAAulBMVEX/////VAQAAAD/TAD+ybn+9/P8/Py9vb3/UQD/VhT/SQD/Uwv/7eX/Wir29vb/VBb+08X/QgD+3dHr6+tra2tVVVXb29vi4uLDw8PT09N3d3dfX1+zs7OmpqbMzMyWlpY7Ozv/OAAxMTGenp4UFBSMjIwmJiYfHx/+49r+hF7+d1L+flX+uqf+bENDQ0OBgYH+pIz+hGr+rpb+Xh7+dUj+nH//jXD+ZjT9i2T9lHT+fV/9w639bjn+ZyhISrWrAAAG9ElEQVR4nO2aaXfiOhKGhYRlIdzCRt4wZqfZt4QkkEn3//9bU5KTG7Z0GsbAnXP0fIgVLdbrqlJZcoKQwWAwGAwGg8FgMBgMBoPBYDDcCWv18PBI763iGJd4jHjr0b11HFFhBYA8/dtsNvMKmo57byUHPPNMmDe7t5IDHj+EFe+t5IBRR+ti3Lm3kkNeiRb2eG8de1Rnzy8TbbHy5GU1+3ekDKc4ZZwTwrIYY4RwzrbFe3u0+rz2SOEI4m2e72g36j7xD0vtU1KGm1avNrGlUCXrFKMXfsJYmvV2zMGjr9dx6KykKD9TtGKlE5S/kqVM9uquNh6vXCXdFghTeI7zgx3ytaR3+O+i80i492rlL2xVVrAHCz2w8j6lb4VBqp1a1pZwdoVFUHUV8MiWu0/19Q9e/DTaZoSKjJdu+JKaVf5CFySNchWNJh6/mbIZ/z7GMneuXWRNvPKNlBX/Vpd6DzjIeuD8GhnNOcRd/7Uu8ObcQtYT/5F7QqOrH4dUztAFK2ALzzbn07x33M75GeyADgRYlXt5b4esF1LZ41xdBTYHNz56pbzDjFb3OVtYwVvB8034NGdhB8z4+co4pGiXX/cw4GzOjrHMZGjK59c8cV5isCzKXE7yNdnIdeEt7Ly/I0sXGAx8WdRRNs7TZMVKubwu0l/vm4qLdBX4M1IHTy/PLLv1YEO2GnUuy2HvMAZ3GlX4Kkdh4Dy2rtKx1lS+UFiho2z1m+Qb/jub/uKlwrw3uMUrr1zrdPJ4yZpU6CCbeTmvy0+mf7NvPQX5D4yueiTPINvlnP3OHkwJczwyvsLJBKDehboKbFKtjtwC+30NYY77drEwOAFnG5M3N+8d4+hXp/M/6PqwnNfpjHM9zo02pxbk9xn3RA8+z9GfdHxCV+n3ZPPNsWT9a8KOVjJ/zU+YdSpPgLDH2fG8+8K2b+PDCGC/8oszp3NyXuZtR5M/KmOk7M4OrMrW+QmzjuNexTGHlD46/YFMQWC9wBagutqPA7bJcWVuD2OMVd6QtSIFz/1y70jGDnKfCJtY5T3t+v2UF9XDb2HZDv6ZkO3oi/cBCIIeDmds9LqrnZdzTWWjSZl8AnGidzBuCZL5nJNjWIFkJ8kx4cWi99lQesg5xVrV4j/MdoUht3iMOyU7wpydlqt9l9Uin1jmyhUh49Nd3rzMlZbHClfVss+Ks9Kb46jg/2KLBbHFtyMrC/7bCbM2BDIULAj+8tWssFgJqRCVLm6nC1bpBjIUI970S2vQVUd9W+bkxn8mtB6f5pvp259OF9XtfDO/0pf+P2J9GzuWc8PwMhgMhv8LQlshEBJxqxfq9A6lli6ptprI+onYtmNdW9MjQhQ2spdB00ZRT3fpCfhFESFpZ2OhEUjD84VhTQ3FQ9zFOAEZzYEqBRSFfdU0jHW/nu7nCySzEQmqY6kaaLctf+JYd2mGWWMLLXAfRrdlgEFTAyrOReCFBEBEvymjOm6gqNuPpfTxT1TDvoxSPNQ2W+JUhqo2xAkMiATMrRtkNxA21CPUxyjFrayxOwilhDE29uFRhucbLIKB2bzK5mE/EC2cqnqYLtbTJbip7JLgCH7iPmp+PP6gr4VFA5+GAzBlDE/VwJl9xWBBlaUaKMDNev8CT4a4nSR+KBZt5RfRVcZX84mgLdVMykFKKPX7qgNWRunWgyBAtN/WMVbrJxQFwwj5gwg6L6AtoXLY7TWWw4EEuUN9g3Np4oXv+zXwh/oNLrLb16VgIVN9xyx+xEJ7FCzWwvUEgCAItLAYLxFUQnj9VIZXjeDv/iDAeCm0L/wLdMHzNxClSLbbQstMRFtbDOILZlOSAh3jYjhAyvGBFgojIHLqNLtDSxm+1VO+Tvo13VgDUTYOhLa4fYmwVjYMQqinzASTLtVEIoB6FVY0xb6aX+A2tNehdglLGGnpS31taIfjwUAZRrlTYWfmW2qLxZcI+xhWw7jut9XtwgGUFpAOIB8E9QAPdORCkvDrbQzh5ENtvR5ABA5UrIlMWILVGhH1rJFqM0qslof//iBnkvrZI6JoWQ98LVKqkq3bgFaWYMUSykn6Uev7Uibqkoi4ru4QBj1l2IZuS2izrtSkdYiCXiIvEYbEZ0nQgxKl9HOn/0+ZflS/X8Xufehx5ecMhjshEN09slFJT3iFotv/l64tYrEzrR3GKFVKdN17vWii2ken2yls1SjsYKIwRQ1IBc04RA1kp6FMGzJqNFCvIZFIm6mIGzH6KcPGJW+ei2hGsilrMCOywRqxgHc0AhlhWJPNsIfsGgizZSzsWpOmKK5dlOEvQQoUxkLETaQylUwjFMIGUAgbLBbXUATtNEIRlTFsm2AnGd1K2BeI6N4KDAaDwWAwGAwGg8FgMBgMBsN1+S/zaZAnJzV4HAAAAABJRU5ErkJggg=="  alt="logo"
      />

      <div className="inputBox">
        <SearchRounded className="searchIcon" />
        <input type="text" placeholder="Search.." />
      </div>

      <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />

        <div className="cart_content">
          <p>2</p>
        </div>
      </div>

      <div className="profileContainer">
        <div className="imgBox">
          <img src="https://img.freepik.com/premium-photo/steak-delivery-app-interface-with-165-steak-scooter-icon-more-button-vertical-mobile-wallpaper_896558-77349.jpg?size=626&ext=jpg&ga=GA1.1.1041205951.1707818644&semt=ais_hybrid" alt="" />
        </div>

        <h2 className="userName">Muhammad Althaf</h2>
      </div>

      <div className="toggleMenu">
        <BarChart className="toggleIcon" />
      </div>
    </header>
  );
};

export default Header;
