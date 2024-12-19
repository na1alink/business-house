class Modal {
  constructor(id) {
    this.id = id;
    this.window = document.getElementById(id);
    this.modal = this.window.querySelector(".modal");
    this.closeBtn = this.window.querySelector(".modal-close");
    this.form = this.window.querySelector("form");
    this._handleKeydown = this._handleKeydown.bind(this);
  }

  open() {
    this.window.classList.add("opened");
    this.window.addEventListener("click", (e) => this._handleClick(e));
    this.closeBtn?.addEventListener("click", () => this.close());
    this.form?.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    document.addEventListener("keydown", this._handleKeydown);

    this.window.closest(".wrap-modals-all").classList.add("opened");
  }

  close() {
    this.window.removeEventListener("click", (e) => this._handleClick(e));
    this.closeBtn?.removeEventListener("click", () => this.close());
    document.removeEventListener("keydown", this._handleKeydown);
    this.window.classList.remove("opened");

    this.window.closest(".wrap-modals-all").classList.remove("opened");
  }

  _handleClick(e) {
    if (e.target === this.window || e.target.matches(".modal-link")) {
      this.close();
    }
  }

  _handleKeydown(e) {
    if (e.key === "Escape") {
      this.close();
    }
  }
}

(function () {
  const modalButtons = document.querySelectorAll("[data-modal-id]");

  modalButtons.forEach((btn) => {
    if (btn) {
      const id = btn.dataset.modalId;
      const modal = new Modal(id);
      btn.addEventListener("click", () => modal.open());
    }
  });
})();

function scrollUp() {
  window.scrollTo({
    top: window.innerHeight,

    behavior: "smooth",
  });
}
