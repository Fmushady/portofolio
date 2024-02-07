function updateProfile() {
  // Get values from input fields
  const newName = document.getElementById("nameInput").value;
  const newRole = document.getElementById("roleInput").value;
  const newAvailability = document.getElementById("availabilityInput").value;
  const newUsia = document.getElementById("usiaInput").value;
  const newLokasi = document.getElementById("lokasiInput").value;
  const newPengalaman = document.getElementById("pengalamanInput").value;
  const newEmail = document.getElementById("emailInput").value;

  // Update the content of the elements
  document.getElementById("name").innerText = newName;
  document.getElementById("role").innerText = newRole;
  document.getElementById("availability").innerText = newAvailability;
  document.getElementById("usia").innerText = newUsia;
  document.getElementById("lokasi").innerText = newLokasi;
  document.getElementById("pengalaman").innerText = newPengalaman;
  document.getElementById("email").innerText = newEmail;

  // Clear input fields
  document.getElementById("nameInput").value = "";
  document.getElementById("roleInput").value = "";
  document.getElementById("availabilityInput").value = "";
  document.getElementById("usiaInput").value = "";
  document.getElementById("lokasiInput").value = "";
  document.getElementById("pengalamanInput").value = "";
  document.getElementById("emailInput").value = "";

  // You can add similar lines for other details
  document.getElementById("form").style.visibility = "hidden";
  document.documentElement.scrollTop = 0;

  Swal.fire({
    title: "هل تريد الاستمرار؟",
    icon: "question",
    iconHtml: "؟",
    confirmButtonText: "نعم",
    cancelButtonText: "لا",
    showCancelButton: true,
    showCloseButton: true,
  });
}
function editProfile() {
  document.getElementById("form").style.visibility = "visible";
}
