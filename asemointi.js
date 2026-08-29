const dialog = document.getElementById("dialogi");
const openBtn = document.querySelector("button#open_dialog");
const closeBtn = document.querySelector("button");

      const openDialog = () => {
        dialog.showModal();
      };

      const closeDialog = () => {
        dialog.close();
      }

      openBtn.addEventListener("click", openDialog);
      closeBtn.addEventListener("click", closeDialog);