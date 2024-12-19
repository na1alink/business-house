document.addEventListener("DOMContentLoaded", () => {
  const mainMediaQuery = window.matchMedia("(min-width: 1200px)");

  if (mainMediaQuery.matches) {
    const tlHome = gsap.timeline({ delay: 0.4 });
    gsap.from(".home__title span", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
    });

    tlHome.to(".home__descr", {
      y: "0%",
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
    });

    tlHome.to(".home__info", {
      y: "0%",
      opacity: 1,
      duration: 0.9,
      ease: "power2.out",
    });

    tlHome.to(".home__info-item", {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out",
    });

    const tlAdvantages = gsap.timeline({
      scrollTrigger: {
        trigger: ".advantages__content",
        start: "top 60%",
        end: "bottom 20%",
        once: true,
      },
    });

    document.querySelectorAll(".advantages__card").forEach((card, index) => {
      tlAdvantages
        .from(card.querySelector(".advantages__card-step"), {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: "power2.out",
        })
        .from(
          card.querySelector(".advantages__card-title"),
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .from(
          card.querySelector(".advantages__card-descr"),
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3"
        );

      tlAdvantages.add("card" + index, `+=${index * 0.5}`);
    });

    const tlServices = gsap.timeline({
      scrollTrigger: {
        trigger: ".services__content",
        start: "top 60%",
        end: "bottom 20%",
        once: true,
      },
    });

    document.querySelectorAll(".services__card").forEach((card, index) => {
      tlServices
        .from(card.querySelector(".services__card-img img"), {
          opacity: 0,
          scale: 0.8,
          duration: 0.5,
          ease: "power2.out",
        })
        .from(
          card.querySelector(".services__card-title span"),
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .from(
          card.querySelector(".services__card-descr"),
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3"
        );

      tlServices.add("card" + index, `+=${index * 0.5}`);
    });

    function animateActiveContent() {
      const activeContent = document.querySelector(".stages__content.active");

      if (!activeContent) return;
      if (activeContent.classList.contains("animated")) return;

      const tlStages = gsap.timeline({
        scrollTrigger: {
          trigger: activeContent,
          start: "top 60%",
          end: "bottom 20%",
          once: true,
        },
      });

      activeContent
        .querySelectorAll(".stages__content-item")
        .forEach((item, index) => {
          tlStages.from(
            [
              item.querySelector(".stages__content-item__step"),
              item.querySelector(".stages__content-item__title"),
            ],
            {
              opacity: 0,
              y: 20,
              duration: 0.4,
              ease: "power2.out",
            }
          );

          if (
            index <
            activeContent.querySelectorAll(".stages__content-item").length - 1
          ) {
            tlStages.from(
              item.querySelector(".stages__content-item__arrow"),
              {
                opacity: 0,
                duration: 0.5,
                ease: "power2.out",
              },
              "-=0.3"
            );
          }

          tlStages.add("stage" + index, `+=${index * 0.4}`);
        });

      activeContent.classList.add("animated");
    }

    animateActiveContent();

    document.querySelectorAll(".stages__tabs-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".stages__content").forEach((content) => {
          content.classList.remove("active");
        });

        const target = btn.getAttribute("data-target");
        document.getElementById(target).classList.add("active");

        animateActiveContent();
      });
    });
  }
});
