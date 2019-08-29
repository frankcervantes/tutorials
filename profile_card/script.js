const ProfileCard = (() => {
    const profile = document.querySelector('.profile-img');
    const name = document.querySelector('.name');
    const location = document.querySelector('.location');
    const description = document.querySelector('.description');
    const phone = document.querySelector('.phone');
    const cell = document.querySelector('.cell');
    const email = document.querySelector('.email');

    return {
        setData: (data) => {
            let fullname = `${data.name.first} ${data.name.last}`;
            let origin = `${data.location.city}, ${data.nat}`;
 
            profile.src = data.picture.large;
            name.textContent = fullname;
            location.textContent = origin;
            description.textContent = `Hello, I am ${fullname} from ${origin}. To learn more about me, my username is` +
            `${data.login.username}. Feel free to email me at ${data.email} !`;
            phone.textContent = data.phone;
            cell.textContent = data.cell;
            email.textContent = data.email;
        }
    }
})();

fetch('https://randomuser.me/api/?results=1')
.then((resp) => resp.json())
.then((data) => {
    ProfileCard.setData(data.results[0]);
});