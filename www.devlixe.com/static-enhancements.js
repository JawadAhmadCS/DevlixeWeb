(function () {
  "use strict";

  var reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  function directChildren(element, selector) {
    return Array.from(element.children).filter(function (child) {
      return child.matches(selector);
    });
  }

  function initConceptGraph() {
    var section = document.querySelector(".concept-section");
    var canvas = section && section.querySelector("canvas");

    if (!canvas || canvas.dataset.enhanced === "true") return;

    canvas.dataset.enhanced = "true";
    canvas.classList.add("devlixe-growth-chart");

    var values = [5, 60, 31, 35, 30];
    var progress = reducedMotion ? 1 : 0;
    var started = reducedMotion;
    var startTime = 0;

    function buildPath(points) {
      var path = new Path2D();
      path.moveTo(points[0].x, points[0].y);

      for (var index = 0; index < points.length - 1; index += 1) {
        var current = points[index];
        var next = points[index + 1];
        var previous = points[index - 1] || current;
        var afterNext = points[index + 2] || next;
        var control1X = current.x + (next.x - previous.x) / 6;
        var control1Y = current.y + (next.y - previous.y) / 6;
        var control2X = next.x - (afterNext.x - current.x) / 6;
        var control2Y = next.y - (afterNext.y - current.y) / 6;

        path.bezierCurveTo(
          control1X,
          control1Y,
          control2X,
          control2Y,
          next.x,
          next.y,
        );
      }

      return path;
    }

    function draw() {
      var bounds = canvas.getBoundingClientRect();
      var width = Math.max(300, Math.round(bounds.width));
      var height = Math.max(260, Math.round(bounds.height || 350));
      var pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      if (
        canvas.width !== Math.round(width * pixelRatio) ||
        canvas.height !== Math.round(height * pixelRatio)
      ) {
        canvas.width = Math.round(width * pixelRatio);
        canvas.height = Math.round(height * pixelRatio);
      }

      var context = canvas.getContext("2d");
      if (!context) return;

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.clearRect(0, 0, width, height);

      var padding = {
        top: 36,
        right: 18,
        bottom: 28,
        left: 42,
      };
      var chartWidth = width - padding.left - padding.right;
      var chartHeight = height - padding.top - padding.bottom;
      var maximum = 65;
      var points = values.map(function (value, index) {
        return {
          x: padding.left + (chartWidth * index) / (values.length - 1),
          y: padding.top + chartHeight * (1 - value / maximum),
        };
      });
      var path = buildPath(points);
      var dashLength = Math.max(width * 1.8, 1200);

      context.save();
      context.strokeStyle = "#db4a39";
      context.lineWidth = 3;
      context.lineCap = "round";
      context.lineJoin = "round";
      context.shadowColor = "rgba(0, 0, 0, 0.24)";
      context.shadowBlur = 9;
      context.shadowOffsetY = 4;
      context.setLineDash([dashLength, dashLength]);
      context.lineDashOffset = dashLength * (1 - progress);
      context.stroke(path);
      context.restore();

      if (progress > 0.72) {
        var focusPoint = points[2];
        var pointProgress = Math.min(1, (progress - 0.72) / 0.28);

        context.save();
        context.beginPath();
        context.arc(
          focusPoint.x,
          focusPoint.y,
          9 * pointProgress,
          0,
          Math.PI * 2,
        );
        context.fillStyle = "#c75778";
        context.shadowColor = "rgba(199, 87, 120, 0.45)";
        context.shadowBlur = 12;
        context.fill();
        context.restore();
      }

      context.save();
      context.translate(16, height / 2);
      context.rotate(-Math.PI / 2);
      context.fillStyle = "#333";
      context.font =
        "700 13px Inter, ui-sans-serif, system-ui, -apple-system, sans-serif";
      context.textAlign = "center";
      context.fillText("GROWTH", 0, 0);
      context.restore();
    }

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      progress = Math.min(1, (timestamp - startTime) / 1150);
      draw();
      if (progress < 1) window.requestAnimationFrame(animate);
    }

    draw();

    if (!reducedMotion && "IntersectionObserver" in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          if (entries[0].isIntersecting && !started) {
            started = true;
            window.requestAnimationFrame(animate);
            observer.disconnect();
          }
        },
        { threshold: 0.2 },
      );
      observer.observe(canvas);
    } else if (!started) {
      started = true;
      window.requestAnimationFrame(animate);
    }

    if ("ResizeObserver" in window) {
      new ResizeObserver(draw).observe(canvas.parentElement);
    } else {
      window.addEventListener("resize", draw, { passive: true });
    }
  }

  function initTrustedLogoMarquee() {
    var section = document.querySelector(".concept-section");
    var heading = section
      ? Array.from(section.querySelectorAll("h2")).find(function (item) {
          return item.textContent.trim() === "Trusted by the Industry";
        })
      : null;

    if (!heading || heading.parentElement.querySelector(".devlixe-logo-marquee")) {
      return;
    }

    var logoPaths = [
      "../cdn.sanity.io/images/v1m04ogh/production/e55f739a02ed7f29f14c9dfd5510233cc210f912-1200x1200.png",
      "../cdn.sanity.io/images/v1m04ogh/production/10e9022b6ba2368a3b24cd667e6f29b7f0cc186b-1200x1200.png",
      "../cdn.sanity.io/images/v1m04ogh/production/c7db3f8ba294c45f3d3e62f1e8cd4654fcd79005-1200x1200.png",
      "../cdn.sanity.io/images/v1m04ogh/production/d7a0fba73a0ef57b904661f39e81090430ce79b9-1200x1200.png",
      "../cdn.sanity.io/images/v1m04ogh/production/4a1b1263b01cb1f0519f8fd1d7069f4622a1c3f9-1200x1200.png",
      "../cdn.sanity.io/images/v1m04ogh/production/6746d73b121df40d842401e53efc8f3e8a15724d-1200x1200.png",
      "../cdn.sanity.io/images/v1m04ogh/production/0d78348ea19ce75719d3bfac799aa9182175b7a1-1200x1200.png",
      "../cdn.sanity.io/images/v1m04ogh/production/2a821e20425ef05ef2f8b9370fbceb9c0c958384-1200x1200.png",
      "../cdn.sanity.io/images/v1m04ogh/production/4002e1cad477d5d8f991037f978f6bb7d9bb3dae-1200x1200.png",
      "../cdn.sanity.io/images/v1m04ogh/production/a6af4ac6bd5f1ce916c371d6440f830fd7601bfa-1200x1200.png",
    ];
    var marquee = document.createElement("div");
    var track = document.createElement("div");

    marquee.className = "devlixe-logo-marquee";
    marquee.setAttribute("aria-label", "Trusted industry partners");
    track.className = "devlixe-logo-marquee__track";

    [false, true].forEach(function (duplicate) {
      var group = document.createElement("div");
      group.className = "devlixe-logo-marquee__group";
      if (duplicate) group.setAttribute("aria-hidden", "true");

      logoPaths.forEach(function (path, index) {
        var image = document.createElement("img");
        image.className = "devlixe-logo-marquee__logo";
        image.src = path;
        image.alt = duplicate ? "" : "Industry partner " + (index + 1);
        image.loading = "lazy";
        image.decoding = "async";
        group.appendChild(image);
      });

      track.appendChild(group);
    });

    marquee.appendChild(track);
    heading.parentElement.appendChild(marquee);
  }

  function initHeroCarousel() {
    var hero = document.querySelector("main > section");
    if (!hero) return;

    var stage = Array.from(hero.querySelectorAll("div")).find(function (item) {
      return (
        item.classList.contains("flex") &&
        item.classList.contains("h-full") &&
        item.classList.contains("items-center")
      );
    });
    if (!stage || stage.dataset.enhanced === "true") return;

    var slides = directChildren(stage, ".grid");
    if (slides.length < 2) return;

    stage.dataset.enhanced = "true";
    stage.style.position = "relative";
    stage.style.width = "100%";

    var navigation = directChildren(hero, "div").find(function (item) {
      return (
        item !== stage &&
        directChildren(item, "div").length === slides.length &&
        item.classList.contains("bg-grey8")
      );
    });
    var tabs = navigation ? directChildren(navigation, "div") : [];
    var activeIndex = 0;
    var timer = null;

    function showSlide(index) {
      activeIndex = (index + slides.length) % slides.length;

      slides.forEach(function (slide, slideIndex) {
        var active = slideIndex === activeIndex;
        var content = slide.querySelector(".imageActive, .imageInactive");
        var visual = slide.querySelector(".image1Active, .image1Inactive");

        slide.style.position = active ? "relative" : "absolute";
        slide.style.inset = active ? "auto" : "0";
        slide.style.width = "100%";
        slide.style.opacity = active ? "1" : "0";
        slide.style.zIndex = active ? "1" : "-1";
        slide.style.pointerEvents = active ? "auto" : "none";
        slide.style.transform = active ? "translateY(0)" : "translateY(12px)";
        slide.style.transition =
          "opacity 650ms ease, transform 650ms ease";
        slide.setAttribute("aria-hidden", active ? "false" : "true");

        if (content) {
          content.classList.toggle("imageActive", active);
          content.classList.toggle("imageInactive", !active);
        }

        if (visual) {
          visual.classList.toggle("image1Active", active);
          visual.classList.toggle("image1Inactive", !active);
        }
      });

      tabs.forEach(function (tab, tabIndex) {
        var active = tabIndex === activeIndex;
        var indicator = tab.firstElementChild;
        var heading = tab.querySelector("h5");
        var description = tab.querySelector("p");

        tab.classList.add("devlixe-hero-tab");
        tab.setAttribute("aria-selected", active ? "true" : "false");

        if (indicator) {
          indicator.style.backgroundColor = active
            ? "rgba(255, 255, 255, 0.82)"
            : "transparent";
        }

        if (heading) {
          heading.style.color = active
            ? "rgb(255, 255, 255)"
            : "rgba(255, 255, 255, 0.5)";
        }

        if (description) {
          description.style.color = active
            ? "rgb(255, 255, 255)"
            : "rgba(255, 255, 255, 0.5)";
        }
      });
    }

    function start() {
      if (reducedMotion || timer) return;
      timer = window.setInterval(function () {
        showSlide(activeIndex + 1);
      }, 7000);
    }

    function stop() {
      if (!timer) return;
      window.clearInterval(timer);
      timer = null;
    }

    tabs.forEach(function (tab, index) {
      tab.setAttribute("role", "button");
      tab.setAttribute("tabindex", "0");
      tab.addEventListener("click", function () {
        showSlide(index);
      });
      tab.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          showSlide(index);
        }
      });
    });

    hero.addEventListener("mouseenter", stop);
    hero.addEventListener("mouseleave", start);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stop();
      else start();
    });

    showSlide(0);
    start();
  }

  function activateTabs(tabList, panels, displayMode) {
    if (!tabList || panels.length < 2 || tabList.dataset.enhanced === "true") {
      return;
    }

    var tabs = directChildren(tabList, "li");
    if (tabs.length !== panels.length) return;

    tabList.dataset.enhanced = "true";
    tabList.setAttribute("role", "tablist");

    function show(index) {
      tabs.forEach(function (tab, tabIndex) {
        var active = tabIndex === index;
        tab.classList.add("devlixe-static-tab");
        tab.setAttribute("role", "tab");
        tab.setAttribute("tabindex", active ? "0" : "-1");
        tab.setAttribute("aria-selected", active ? "true" : "false");
        tab.style.backgroundColor = active
          ? "rgba(255, 255, 255, 0.08)"
          : "transparent";
        tab.style.borderColor = active
          ? "rgba(255, 255, 255, 0.1)"
          : "transparent";
      });

      panels.forEach(function (panel, panelIndex) {
        var active = panelIndex === index;
        panel.style.display = active ? displayMode : "none";
        panel.style.position = active ? "relative" : "absolute";
        panel.style.opacity = active ? "1" : "0";
        panel.style.pointerEvents = active ? "auto" : "none";
        panel.setAttribute("role", "tabpanel");
        panel.setAttribute("aria-hidden", active ? "false" : "true");
      });
    }

    tabs.forEach(function (tab, index) {
      tab.addEventListener("click", function () {
        show(index);
      });
      tab.addEventListener("keydown", function (event) {
        var nextIndex = index;
        if (event.key === "ArrowDown" || event.key === "ArrowRight") {
          nextIndex = (index + 1) % tabs.length;
        } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
          nextIndex = (index - 1 + tabs.length) % tabs.length;
        } else if (event.key !== "Enter" && event.key !== " ") {
          return;
        }

        event.preventDefault();
        show(nextIndex);
        tabs[nextIndex].focus();
      });
    });

    show(0);
  }

  function initIndustryTabs() {
    var section = Array.from(document.querySelectorAll("section")).find(
      function (item) {
        var chip = item.querySelector(".chip");
        return chip && chip.textContent.trim() === "Industries";
      },
    );
    if (!section) return;

    var tabList = Array.from(section.querySelectorAll("ul")).find(function (
      list,
    ) {
      return directChildren(list, "li").length === 6;
    });
    var panelContainer = tabList && tabList.nextElementSibling;
    var panels = panelContainer ? directChildren(panelContainer, "div") : [];

    activateTabs(tabList, panels, "flex");
  }

  function initServiceTabs() {
    var section = Array.from(document.querySelectorAll("section")).find(
      function (item) {
        var chip = item.querySelector(".chip");
        return chip && chip.textContent.trim() === "Services";
      },
    );
    if (!section) return;

    var tabList = Array.from(section.querySelectorAll("ul")).find(function (
      list,
    ) {
      return directChildren(list, "li").length === 5;
    });
    var panels = Array.from(section.querySelectorAll("div")).filter(function (
      panel,
    ) {
      return (
        panel.classList.contains("absolute") &&
        panel.classList.contains("opacity-0") &&
        panel.classList.contains("mt-5")
      );
    });

    activateTabs(tabList, panels, "block");
  }

  function createSliderControls(root, previous, next, getStatus) {
    var controls = document.createElement("div");
    var previousButton = document.createElement("button");
    var status = document.createElement("span");
    var nextButton = document.createElement("button");

    controls.className = "devlixe-slider-controls";
    previousButton.className = "devlixe-slider-button";
    nextButton.className = "devlixe-slider-button";
    status.className = "devlixe-slider-status";
    previousButton.type = "button";
    nextButton.type = "button";
    previousButton.setAttribute("aria-label", "Previous slide");
    nextButton.setAttribute("aria-label", "Next slide");
    previousButton.innerHTML = "&#8592;";
    nextButton.innerHTML = "&#8594;";
    previousButton.addEventListener("click", previous);
    nextButton.addEventListener("click", next);
    controls.append(previousButton, status, nextButton);
    root.insertAdjacentElement("afterend", controls);

    return function updateStatus() {
      status.textContent = getStatus();
    };
  }

  function initSimpleSlider(root, autoplay) {
    if (!root || root.dataset.enhanced === "true") return;

    var wrapper = root.querySelector(".swiper-wrapper");
    var slides = wrapper ? directChildren(wrapper, ".swiper-slide") : [];
    if (!wrapper || slides.length < 2) return;

    root.dataset.enhanced = "true";
    root.classList.add("devlixe-simple-slider");

    var activeIndex = 0;
    var timer = null;
    var updateStatus = function () {};

    function show(index) {
      activeIndex = (index + slides.length) % slides.length;
      wrapper.style.transform =
        "translate3d(-" + activeIndex * 100 + "%, 0, 0)";
      slides.forEach(function (slide, slideIndex) {
        slide.setAttribute(
          "aria-hidden",
          slideIndex === activeIndex ? "false" : "true",
        );
      });
      updateStatus();
    }

    function previous() {
      show(activeIndex - 1);
    }

    function next() {
      show(activeIndex + 1);
    }

    updateStatus = createSliderControls(root, previous, next, function () {
      return activeIndex + 1 + " / " + slides.length;
    });

    if (autoplay && !reducedMotion) {
      function start() {
        if (!timer) timer = window.setInterval(next, autoplay);
      }
      function stop() {
        if (timer) window.clearInterval(timer);
        timer = null;
      }
      root.addEventListener("mouseenter", stop);
      root.addEventListener("mouseleave", start);
      root.addEventListener("focusin", stop);
      root.addEventListener("focusout", start);
      start();
    }

    show(0);
  }

  function initSliders() {
    var sliders = Array.from(document.querySelectorAll(".swiper"));
    sliders.forEach(function (slider, index) {
      initSimpleSlider(slider, index === 0 ? 9000 : 0);
    });
  }

  function initFileUploads() {
    document.querySelectorAll('input[type="file"]').forEach(function (input) {
      var dropzone = input.closest(".border-dashed");
      if (!dropzone || dropzone.dataset.enhanced === "true") return;

      dropzone.dataset.enhanced = "true";
      dropzone.setAttribute("role", "button");
      dropzone.setAttribute("tabindex", "0");

      function openPicker(event) {
        if (event.target === input) return;
        if (
          event.type === "keydown" &&
          event.key !== "Enter" &&
          event.key !== " "
        ) {
          return;
        }
        event.preventDefault();
        input.click();
      }

      dropzone.addEventListener("click", openPicker);
      dropzone.addEventListener("keydown", openPicker);
      input.addEventListener("change", function () {
        var status = Array.from(dropzone.querySelectorAll("span")).find(
          function (item) {
            return item.textContent.trim() === "No file selected";
          },
        );
        if (status && input.files && input.files[0]) {
          status.textContent = input.files[0].name;
        }
      });
    });
  }

  function init() {
    document.documentElement.classList.add("devlixe-enhancements-ready");
    initConceptGraph();
    initTrustedLogoMarquee();
    initHeroCarousel();
    initIndustryTabs();
    initServiceTabs();
    initSliders();
    initFileUploads();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
