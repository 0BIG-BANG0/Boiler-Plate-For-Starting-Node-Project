function deleteProduct(id) {
  var result = confirm("Are you Sure you want to delete the Product ?");
  if (result) {
    fetch("/delete-product/" + id, {
      method: "POST",
    }).then((res) => {
      if (res.ok) {
        location.reload();
      }
    });
  }
}
