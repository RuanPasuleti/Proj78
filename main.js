var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg", "https://i.postimg.cc/BnygRTCQ/boy.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/xC9bZ8B1/pngtree-mother-reaching-out-png-image-2456907.jpg"];
var names = ["Fmaily Book", "Ken Thejaswini", "Aklesh Kumar Pasuleti", "Ruan Pasuleti", "Riaan Pasuleti", "Thejaswini Kempiah"];
var i = 0;

function update() {
    i++;
    var numbers_of_family_member_in_array = 5
    if (i > numbers_of_family_member_in_array) {
        i = 0;
    }


    var updatedImage = images[i];

    var updatedName = names[i];

    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}