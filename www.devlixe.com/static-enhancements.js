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

  function getHeaderMegaMenuData() {
    return {
      Services: {
        featured: true,
        categories: [
          {
            label: "AI Agents",
            hero: {
              title: "AI Voice Agents",
              badge: "AI Voice",
              description: "Your AI answers every call 24/7",
              href: "ai-agent-development.html",
            },
            items: [
              { icon: "phone-in", color: "#ff2438", title: "Inbound Agents", description: "Answer and qualify every incoming lead", href: "inbound-voice-agent.html" },
              { icon: "phone-out", color: "#00b83e", title: "Outbound Agents", description: "Reach out and close more deals automatically", href: "outbound-voice-agent.html" },
              { icon: "bot", color: "#1559c5", title: "AI Agent Development", description: "Build agents that handle workflows intelligently", href: "ai-agent-development.html" },
            ],
          },
          {
            label: "Conversational AI",
            hero: {
              title: "AI Chatbot Development",
              badge: "Chatbots",
              description: "Automate support and customer conversations",
              href: "ai-chatbot-development.html",
            },
            items: [
              { icon: "message", color: "#16a8d8", title: "AI Chatbot", description: "Give customers helpful answers around the clock", href: "ai-chatbot-development.html" },
              { icon: "calendar", color: "#8b5cf6", title: "Appointment Scheduling", description: "Book and manage appointments without manual work", href: "ai-appointment-scheduling-assistant.html" },
              { icon: "whatsapp", color: "#12b76a", title: "WhatsApp Automation", description: "Automate conversations on your customers' favorite channel", href: "whatsapp-chatbot-automation.html" },
            ],
          },
          {
            label: "Custom AI Development",
            hero: {
              title: "Custom AI Development",
              badge: "AI Product",
              description: "Build AI solutions around your business workflow",
              href: "ai-poc-development.html",
            },
            items: [
              { icon: "rocket", color: "#f97316", title: "AI MVP Development", description: "Validate and launch your AI product faster", href: "ai-poc-development.html" },
              { icon: "sparkles", color: "#7c3aed", title: "Generative AI", description: "Create intelligent products with generative AI", href: "generative-ai-development-solutions.html" },
              { icon: "brain", color: "#2563eb", title: "LLM Integration", description: "Connect powerful language models to your systems", href: "large-language-model-development.html" },
              { icon: "plug", color: "#0ea5a4", title: "GPT Integration", description: "Add reliable GPT capabilities to your product", href: "chat-gpt-integration.html" },
            ],
          },
        ],
      },
      Solutions: {
        featured: false,
        categories: [
          {
            label: "Industry",
            items: [
              { icon: "health", color: "#58c91f", title: "Healthcare", description: "Improve patient support with AI-powered precision", href: "ai-healthcare-solutions.html" },
              { icon: "home", color: "#10bfc8", title: "Real Estate", description: "Engage every lead and qualify prospects automatically", href: "ai-real-estate-solutions.html" },
              { icon: "megaphone", color: "#1559c5", title: "Marketing", description: "Create content and optimize campaigns using AI", href: "ai-marketing-automation.html" },
              { icon: "book", color: "#b6e51d", title: "Education", description: "Personalize learning and automate student support", href: "ai-in-education.html" },
              { icon: "shopping", color: "#f97316", title: "Ecommerce", description: "Build smarter shopping and support experiences", href: "ecommerce-ai-solutions.html" },
              { icon: "landmark", color: "#16c89a", title: "Fintech & Banking", description: "Automate service securely across financial workflows", href: "case-studies.html" },
              { icon: "headset", color: "#8b5cf6", title: "Healthcare Voice Agents", description: "Handle patient calls and appointment requests", href: "ai-healthcare-solutions.html" },
              { icon: "building", color: "#f59e0b", title: "Real Estate Voice Agents", description: "Respond to property inquiries and schedule viewings", href: "ai-property-virtual-assistant.html" },
            ],
          },
        ],
      },
      Resources: {
        featured: true,
        categories: [
          {
            label: "Learning & Insights",
            hero: { title: "Case Studies", description: "Real-world AI success stories", href: "case-studies.html" },
            items: [
              { icon: "file", color: "#6b7280", title: "Blogs", description: "Stay updated with the latest AI trends and use cases", href: "blogs.html" },
              { icon: "podcast", color: "#08a7c7", title: "Podcasts", description: "Hear practical insights from technology innovators", href: "podcasts.html" },
              { icon: "book", color: "#2563eb", title: "Ebook", description: "Explore in-depth guides to building with AI", href: "blogs.html" },
            ],
          },
        ],
      },
    };
  }

  function getHeaderMegaIcon(iconName) {
    var paths = {
      "phone-in": '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.35 1.78.69 2.62a2 2 0 0 1-.45 2.11L8.09 9.72a16 16 0 0 0 6.19 6.19l1.27-1.27a2 2 0 0 1 2.11-.45c.84.34 1.72.57 2.62.69A2 2 0 0 1 22 16.92Z"/><path d="m15 3 4 4m0-4v4h-4"/>',
      "phone-out": '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.35 1.78.69 2.62a2 2 0 0 1-.45 2.11L8.09 9.72a16 16 0 0 0 6.19 6.19l1.27-1.27a2 2 0 0 1 2.11-.45c.84.34 1.72.57 2.62.69A2 2 0 0 1 22 16.92Z"/><path d="m19 3-4 4m0-4v4h4"/>',
      bot: '<rect width="16" height="12" x="4" y="8" rx="2"/><path d="M9 8V5h6v3M12 5V3M8 13h.01M16 13h.01M9 17h6"/>',
      message: '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/><path d="M8 10h8M8 14h5"/>',
      calendar: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>',
      whatsapp: '<path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.45L3 21l2.05-5.4A8.5 8.5 0 1 1 21 11.5Z"/><path d="M8.2 7.8c.6 3.3 2.7 5.4 6 6l1.1-1.2 2 .5c-.2 2-1.4 3-3.2 2.7-4.2-.7-7.2-3.7-7.9-7.9-.3-1.8.7-3 2.7-3.2l.5 2Z"/>',
      rocket: '<path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.8-.9.8-2.3-.1-3.1a2.2 2.2 0 0 0-2.9.1Z"/><path d="m9 15-3-3s3.5-6.5 7-9c2.4-1.7 6-1 8-1-0 2 .7 5.6-1 8-2.5 3.5-9 7-9 7Z"/><path d="M15 7h.01M9 15l-1 4 4-1"/>',
      sparkles: '<path d="m12 3-1.5 4.5L6 9l4.5 1.5L12 15l1.5-4.5L18 9l-4.5-1.5ZM5 15l-.8 2.2L2 18l2.2.8L5 21l.8-2.2L8 18l-2.2-.8ZM19 14l-.7 1.8-1.8.7 1.8.7.7 1.8.7-1.8 1.8-.7-1.8-.7Z"/>',
      brain: '<path d="M9.5 4A3.5 3.5 0 0 0 6 7.5c0 .2 0 .4.1.6A3.5 3.5 0 0 0 4 14.5 3.5 3.5 0 0 0 9.5 18M14.5 4A3.5 3.5 0 0 1 18 7.5c0 .2 0 .4-.1.6a3.5 3.5 0 0 1 2.1 6.4 3.5 3.5 0 0 1-5.5 3.5M9.5 4v16M14.5 4v16M6.1 8.1c.9.2 1.7.7 2.2 1.4M17.9 8.1c-.9.2-1.7.7-2.2 1.4M4.5 14.5c1.2-.5 2.5-.4 3.5.3M19.5 14.5c-1.2-.5-2.5-.4-3.5.3"/>',
      plug: '<path d="m12 22 1-5M9 8V2M15 8V2M18 8v4a6 6 0 0 1-12 0V8ZM4 8h16"/>',
      health: '<path d="M8 3h8l1 4h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3Z"/><path d="M9 3v4h6V3M12 10v8M8 14h8"/>',
      home: '<path d="m3 11 9-8 9 8"/><path d="M5 10v11h14V10M9 21v-6h6v6M8 10h8"/>',
      megaphone: '<path d="m3 11 18-5v12L3 13Z"/><path d="M11.6 15.4 13 21H7l-1.5-7M21 10v4M4 9v6"/>',
      book: '<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2Z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7Z"/>',
      shopping: '<path d="M6 8 8 3h8l2 5M3 8h18l-1 13H4Z"/><path d="M9 12v1a3 3 0 0 0 6 0v-1"/>',
      landmark: '<path d="m3 10 9-6 9 6M5 10v8M9 10v8M15 10v8M19 10v8M3 18h18M2 22h20"/>',
      headset: '<path d="M4 14v-2a8 8 0 0 1 16 0v2M18 19c0 1.7-1.3 3-3 3h-3"/><path d="M4 14h3v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 1-2ZM20 14h-3v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-1-2Z"/>',
      building: '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
      file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h6"/>',
      podcast: '<circle cx="12" cy="11" r="1"/><path d="M8.5 14.5a5 5 0 1 1 7 0M5.6 17.4a9 9 0 1 1 12.8 0M10 18h4l1 4H9Z"/>',
    };

    return (
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">' +
      (paths[iconName] || paths.sparkles) +
      "</svg>"
    );
  }

  function initHeaderMegaMenus() {
    var header = document.querySelector("header");
    var nav = header && header.querySelector("nav");
    if (!header || !nav || header.dataset.megaEnhanced === "true") return;

    var enhancementScript = Array.from(document.scripts).find(function (script) {
      return /(?:^|\/)static-enhancements\.js(?:\?|$)/.test(script.src);
    });
    var siteBaseUrl = enhancementScript
      ? new URL(".", enhancementScript.src)
      : new URL(".", window.location.href);

    function resolveSiteHref(href) {
      return new URL(href, siteBaseUrl).href;
    }

    var menuData = getHeaderMegaMenuData();
    var menuNames = Object.keys(menuData);
    var buttons = Array.from(nav.querySelectorAll("button")).filter(function (button) {
      return menuNames.indexOf(button.textContent.trim()) !== -1;
    });
    if (buttons.length !== menuNames.length) return;

    header.dataset.megaEnhanced = "true";
    var shell = document.createElement("div");
    shell.className = "devlixe-mega";
    header.appendChild(shell);
    var panelMap = {};
    var activeName = "";
    var suppressFocusOpen = false;

    function createItemLink(item) {
      var link = document.createElement("a");
      link.className = "devlixe-mega__item";
      link.href = resolveSiteHref(item.href);

      var icon = document.createElement("span");
      icon.className = "devlixe-mega__icon";
      icon.setAttribute("aria-hidden", "true");
      icon.style.setProperty("--menu-icon-color", item.color || "#2563eb");
      icon.innerHTML = getHeaderMegaIcon(item.icon);

      var copy = document.createElement("span");
      copy.className = "devlixe-mega__item-copy";
      var title = document.createElement("strong");
      title.textContent = item.title;
      var description = document.createElement("span");
      description.textContent = item.description;
      copy.appendChild(title);
      copy.appendChild(description);
      link.appendChild(icon);
      link.appendChild(copy);
      return link;
    }

    function createHero(hero) {
      var link = document.createElement("a");
      link.className = "devlixe-mega__hero";
      link.href = resolveSiteHref(hero.href);

      var copy = document.createElement("span");
      var heading = document.createElement("span");
      heading.className = "devlixe-mega__hero-heading";
      var title = document.createElement("strong");
      title.textContent = hero.title;
      heading.appendChild(title);
      if (hero.badge) {
        var badge = document.createElement("em");
        badge.textContent = hero.badge;
        heading.appendChild(badge);
      }
      var description = document.createElement("span");
      description.className = "devlixe-mega__hero-description";
      description.textContent = hero.description;
      copy.appendChild(heading);
      copy.appendChild(description);

      var arrow = document.createElement("span");
      arrow.className = "devlixe-mega__arrow";
      arrow.setAttribute("aria-hidden", "true");
      arrow.textContent = "\u2192";
      link.appendChild(copy);
      link.appendChild(arrow);
      return link;
    }

    function createFeaturedCard() {
      var card = document.createElement("a");
      card.className = "devlixe-mega__featured";
      card.href = resolveSiteHref("case-studies.html");

      var label = document.createElement("span");
      label.className = "devlixe-mega__featured-label";
      label.textContent = "AI Automation";
      card.appendChild(label);

      var sourceImage = Array.from(document.images).find(function (image) {
        return (image.alt || "").toLowerCase().indexOf("vendorx") !== -1;
      });
      if (sourceImage) {
        var image = document.createElement("img");
        image.src = sourceImage.currentSrc || sourceImage.src;
        image.alt = "VendorX AI automation case study";
        image.loading = "lazy";
        card.appendChild(image);
      }

      var title = document.createElement("strong");
      title.textContent = "How VendorX cut onboarding time 47% with AI workflows";
      var view = document.createElement("span");
      view.className = "devlixe-mega__featured-view";
      view.textContent = "View case study  \u2192";
      card.appendChild(title);
      card.appendChild(view);
      return card;
    }

    function renderCategory(panelRecord, menu, categoryIndex) {
      var category = menu.categories[categoryIndex];
      panelRecord.categoryButtons.forEach(function (button, index) {
        var selected = index === categoryIndex;
        button.classList.toggle("is-active", selected);
        button.setAttribute("aria-selected", selected ? "true" : "false");
        button.tabIndex = selected ? 0 : -1;
      });

      if (
        panelRecord.activeCategory === categoryIndex &&
        panelRecord.content.childElementCount
      ) {
        return;
      }

      panelRecord.activeCategory = categoryIndex;
      panelRecord.content.replaceChildren();
      if (category.hero) panelRecord.content.appendChild(createHero(category.hero));
      var items = document.createElement("div");
      items.className = "devlixe-mega__items";
      category.items.forEach(function (item) {
        items.appendChild(createItemLink(item));
      });
      panelRecord.content.appendChild(items);
      panelRecord.content.classList.remove("is-refreshing");
      void panelRecord.content.offsetWidth;
      panelRecord.content.classList.add("is-refreshing");
    }

    function createPanel(name, menu) {
      var panel = document.createElement("section");
      panel.className = "devlixe-mega__panel" + (menu.featured ? "" : " devlixe-mega__panel--wide");
      panel.id = "devlixe-mega-" + name.toLowerCase();
      panel.setAttribute("aria-label", name + " menu");
      panel.hidden = true;

      var inner = document.createElement("div");
      inner.className = "devlixe-mega__inner";
      var categories = document.createElement("div");
      categories.className = "devlixe-mega__categories";
      categories.setAttribute("role", "tablist");
      categories.setAttribute("aria-label", name + " categories");
      var content = document.createElement("div");
      content.className = "devlixe-mega__content";
      var categoryButtons = [];

      menu.categories.forEach(function (category, index) {
        var button = document.createElement("button");
        button.type = "button";
        button.className = "devlixe-mega__category";
        button.setAttribute("role", "tab");
        button.innerHTML = "<span></span><span aria-hidden='true'>\u203a</span>";
        button.firstElementChild.textContent = category.label;
        button.addEventListener("mouseenter", function () {
          renderCategory(panelMap[name], menu, index);
        });
        button.addEventListener("focus", function () {
          renderCategory(panelMap[name], menu, index);
        });
        button.addEventListener("click", function () {
          renderCategory(panelMap[name], menu, index);
        });
        categoryButtons.push(button);
        categories.appendChild(button);
      });

      inner.appendChild(categories);
      inner.appendChild(content);
      if (menu.featured) inner.appendChild(createFeaturedCard());
      panel.appendChild(inner);
      shell.appendChild(panel);

      panelMap[name] = {
        panel: panel,
        content: content,
        categoryButtons: categoryButtons,
        activeCategory: -1,
        hideTimer: 0,
        shouldOpen: false,
      };
      renderCategory(panelMap[name], menu, 0);
    }

    function setPanelOpen(panelRecord, shouldOpen) {
      panelRecord.shouldOpen = shouldOpen;
      window.clearTimeout(panelRecord.hideTimer);

      if (shouldOpen) {
        var wasHidden = panelRecord.panel.hidden;
        panelRecord.panel.hidden = false;
        if (wasHidden) {
          panelRecord.panel.classList.remove("is-open");
          void panelRecord.panel.offsetWidth;
        }
        window.requestAnimationFrame(function () {
          if (panelRecord.shouldOpen) {
            panelRecord.panel.classList.add("is-open");
          }
        });
        return;
      }

      panelRecord.panel.classList.remove("is-open");
      panelRecord.hideTimer = window.setTimeout(function () {
        if (!panelRecord.shouldOpen) panelRecord.panel.hidden = true;
      }, reducedMotion ? 0 : 170);
    }

    function closeMenus(restoreFocus) {
      var focusName = activeName;
      menuNames.forEach(function (name) {
        setPanelOpen(panelMap[name], false);
      });
      buttons.forEach(function (button) {
        button.classList.remove("is-active");
        button.setAttribute("aria-expanded", "false");
      });
      activeName = "";
      if (restoreFocus && focusName) {
        var activeButton = buttons.find(function (button) {
          return button.textContent.trim() === focusName;
        });
        if (activeButton) {
          suppressFocusOpen = true;
          activeButton.focus({ preventScroll: true });
          suppressFocusOpen = false;
        }
      }
    }

    function openMenu(name) {
      activeName = name;
      menuNames.forEach(function (menuName) {
        setPanelOpen(panelMap[menuName], menuName === name);
      });
      buttons.forEach(function (button) {
        var selected = button.textContent.trim() === name;
        button.classList.toggle("is-active", selected);
        button.setAttribute("aria-expanded", selected ? "true" : "false");
      });
    }

    menuNames.forEach(function (name) {
      createPanel(name, menuData[name]);
    });

    buttons.forEach(function (button) {
      var name = button.textContent.trim();
      button.setAttribute("aria-haspopup", "true");
      button.setAttribute("aria-controls", panelMap[name].panel.id);
      button.setAttribute("aria-expanded", "false");
      button.addEventListener("mouseenter", function () { openMenu(name); });
      button.addEventListener("focus", function () {
        if (!suppressFocusOpen) openMenu(name);
      });
      button.addEventListener("click", function (event) {
        event.preventDefault();
        openMenu(name);
      });
    });

    header.addEventListener("mouseleave", function () {
      closeMenus(false);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && activeName) {
        event.preventDefault();
        closeMenus(true);
      }
    });
    document.addEventListener("pointerdown", function (event) {
      if (!header.contains(event.target)) closeMenus(false);
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

  function initProcessSection() {
    var section = Array.from(document.querySelectorAll("section")).find(
      function (item) {
        var chip = item.querySelector(".chip");
        return chip && chip.textContent.trim() === "Our Process";
      },
    );
    if (!section || section.dataset.processEnhanced === "true") return;

    var title = Array.from(section.querySelectorAll("h1, h2")).find(function (
      item,
    ) {
      return item.textContent.includes("How We Bring Your");
    });
    var description = Array.from(section.querySelectorAll("p")).find(function (
      item,
    ) {
      return item.textContent
        .trim()
        .startsWith("We believe in transparent");
    });
    var stepsContainer = Array.from(section.querySelectorAll("div")).find(
      function (item) {
        var children = directChildren(item, "div");
        return (
          item.classList.contains("max-w-[970px]") &&
          children.length === 6 &&
          children.every(function (child) {
            return child.querySelector("h3");
          })
        );
      },
    );
    var steps = stepsContainer
      ? directChildren(stepsContainer, "div")
      : [];

    if (!title || !description || steps.length !== 6) return;

    section.dataset.processEnhanced = "true";
    section.classList.add("devlixe-process");
    section.querySelector(".chip").classList.add("devlixe-process__chip");
    title.classList.add("devlixe-process__title");
    description.classList.add("devlixe-process__description");

    steps.forEach(function (step) {
      var connector = directChildren(step, "div").find(function (item) {
        return item.querySelector('img[alt="progress"]');
      });
      var row = directChildren(step, "div").find(function (item) {
        return (
          item.classList.contains("flex") &&
          item.classList.contains("items-center")
        );
      });
      var textColumn = row && row.firstElementChild;
      var imageColumn = row && row.lastElementChild;
      var revealItems = textColumn
        ? Array.from(textColumn.children).filter(function (item) {
            return item.textContent.trim().length > 0;
          })
        : [];

      step.classList.add("devlixe-process-step");
      if (connector) connector.classList.add("devlixe-process-connector");

      if (imageColumn && imageColumn !== textColumn) {
        revealItems.push(imageColumn);
      }

      revealItems.forEach(function (item, index) {
        item.classList.add("devlixe-process-reveal");
        item.style.setProperty(
          "--process-reveal-delay",
          180 + index * 130 + "ms",
        );
      });
    });

    section.classList.add("devlixe-process-ready");

    if (reducedMotion || !("IntersectionObserver" in window)) {
      steps.forEach(function (step) {
        step.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    steps.forEach(function (step) {
      observer.observe(step);
    });
  }

  function shortenText(text, maximumLength) {
    var normalized = String(text || "")
      .replace(/\s+/g, " ")
      .trim();
    if (normalized.length <= maximumLength) return normalized;

    var shortened = normalized.slice(0, maximumLength);
    var lastSpace = shortened.lastIndexOf(" ");
    return shortened.slice(0, Math.max(lastSpace, maximumLength - 24)) + "…";
  }

  function getCompanyName(text) {
    var normalized = String(text || "").trim();
    var simplePhraseMatch = normalized.match(
      /^([A-Za-z0-9.-]+)\s+(?:wasn[’']t|always)/i,
    );
    if (simplePhraseMatch) return simplePhraseMatch[1].trim();

    var commaMatch = normalized.match(/^([^,]+),/);
    if (commaMatch) return commaMatch[1].trim();

    var phraseMatch = normalized.match(
      /^(.+?)\s+(?:had|needed|turned)/i,
    );
    return phraseMatch ? phraseMatch[1].trim() : "Devlixe Client";
  }

  function createTestimonialCard(story, duplicate) {
    var card = document.createElement("article");
    var quote = document.createElement("p");
    var footer = document.createElement("div");
    var avatar = document.createElement("span");
    var details = document.createElement("div");
    var company = document.createElement("p");
    var role = document.createElement("p");
    var stars = document.createElement("div");
    var initials = story.company
      .split(/\s+/)
      .slice(0, 2)
      .map(function (word) {
        return word.charAt(0);
      })
      .join("")
      .toUpperCase();

    card.className = "devlixe-testimonial-card";
    card.setAttribute("role", "listitem");
    if (duplicate) card.setAttribute("aria-hidden", "true");

    quote.className = "devlixe-testimonial-card__quote";
    quote.textContent = "“" + story.quote + "”";
    footer.className = "devlixe-testimonial-card__footer";
    avatar.className = "devlixe-testimonial-card__avatar";
    avatar.style.setProperty("--testimonial-avatar", story.color);
    avatar.textContent = initials || "D";
    details.className = "devlixe-testimonial-card__details";
    company.className = "devlixe-testimonial-card__company";
    company.textContent = story.company;
    role.className = "devlixe-testimonial-card__role";
    role.textContent = story.role;
    stars.className = "devlixe-testimonial-card__stars";
    stars.setAttribute("aria-label", "5 out of 5 stars");
    stars.textContent = "★★★★★";

    details.append(company, role, stars);
    footer.append(avatar, details);
    card.append(quote, footer);
    return card;
  }

  function initTestimonials() {
    var section = document.querySelector(".testimonial-section");
    var wrapper = section && section.querySelector(".cardsWrapper");
    var portfolioSlides = Array.from(
      document.querySelectorAll(".PortfolioSlider .swiper-slide"),
    );
    if (
      !section ||
      !wrapper ||
      wrapper.children.length ||
      !portfolioSlides.length ||
      section.dataset.enhanced === "true"
    ) {
      return;
    }

    var colors = ["#ee7a42", "#2d8e91", "#5867a8", "#aa5e83"];
    var stories = portfolioSlides
      .map(function (slide, index) {
        var label = Array.from(slide.querySelectorAll("div")).find(
          function (item) {
            return item.textContent.trim() === "USE CASE";
          },
        );
        var titleElement = label && label.nextElementSibling;
        var contentParagraphs = Array.from(slide.querySelectorAll("p")).filter(
          function (item) {
            return item.textContent.trim().length > 20;
          },
        );
        var quoteParagraph = contentParagraphs[0];
        var paragraphText = quoteParagraph
          ? quoteParagraph.textContent.trim()
          : "";
        var quoteText = paragraphText;

        if (!quoteText) return null;
        return {
          company: getCompanyName(paragraphText),
          role: titleElement
            ? titleElement.textContent.trim()
            : "AI Transformation",
          quote: shortenText(quoteText, 235),
          color: colors[index % colors.length],
        };
      })
      .filter(Boolean);

    if (!stories.length) return;

    function createRow(items, reverse) {
      var row = document.createElement("div");
      var track = document.createElement("div");
      row.className =
        "devlixe-testimonial-row" +
        (reverse ? " devlixe-testimonial-row--reverse" : "");
      row.setAttribute("role", "list");
      track.className = "devlixe-testimonial-track";

      [false, true].forEach(function (duplicate) {
        var sequence = document.createElement("div");
        sequence.className = "devlixe-testimonial-sequence";
        items.forEach(function (story) {
          sequence.appendChild(createTestimonialCard(story, duplicate));
        });
        track.appendChild(sequence);
      });

      row.appendChild(track);
      return row;
    }

    section.dataset.enhanced = "true";
    wrapper.appendChild(createRow(stories, false));
    wrapper.appendChild(createRow(stories.slice().reverse(), true));
  }

  function initContactSection() {
    var heading = Array.from(document.querySelectorAll("h1")).find(
      function (item) {
        return item.textContent.indexOf("Been Thinking About It") !== -1;
      },
    );
    var panel = heading && heading.closest(".overflow-hidden");
    var section = panel && panel.closest(".min-h-screen");
    if (!panel || !section) return;

    section.classList.add("devlixe-contact-section");
    panel.classList.add("devlixe-contact-panel");
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

  function initPortfolioSlider(root) {
    if (!root || root.dataset.enhanced === "true") return;

    var wrapper = root.querySelector(".swiper-wrapper");
    var slides = wrapper ? directChildren(wrapper, ".swiper-slide") : [];
    var section = root.closest(".PortfolioSlider");
    var previousButton = section
      ? section.querySelector(".custom-swiper-prev")
      : null;
    var nextButton = section
      ? section.querySelector(".custom-swiper-next")
      : null;
    if (!wrapper || slides.length < 2 || !section) return;

    root.dataset.enhanced = "true";
    root.classList.add("devlixe-portfolio-slider");
    root.setAttribute("role", "region");
    root.setAttribute("aria-label", "Customer stories");
    root.setAttribute("tabindex", "0");

    var activeIndex = 0;
    var pointerStartX = null;
    var resizeFrame = null;

    function positionSlider(instant) {
      var activeSlide = slides[activeIndex];
      if (!activeSlide) return;

      if (instant) wrapper.style.transition = "none";
      var rootRect = root.getBoundingClientRect();
      var slideRect = activeSlide.getBoundingClientRect();
      var currentTransform =
        window.getComputedStyle(wrapper).transform === "none"
          ? 0
          : new DOMMatrix(window.getComputedStyle(wrapper).transform).m41;
      var slideCenter =
        slideRect.left - rootRect.left - currentTransform + slideRect.width / 2;
      var target = rootRect.width / 2 - slideCenter;
      wrapper.style.transform = "translate3d(" + target + "px, 0, 0)";

      if (instant) {
        window.requestAnimationFrame(function () {
          wrapper.style.transition = "";
        });
      }
    }

    function updateButtons() {
      if (previousButton) {
        previousButton.disabled = activeIndex === 0;
        previousButton.setAttribute(
          "aria-disabled",
          activeIndex === 0 ? "true" : "false",
        );
      }
      if (nextButton) {
        nextButton.disabled = activeIndex === slides.length - 1;
        nextButton.setAttribute(
          "aria-disabled",
          activeIndex === slides.length - 1 ? "true" : "false",
        );
      }
    }

    function show(index, instant) {
      activeIndex = Math.max(0, Math.min(index, slides.length - 1));
      slides.forEach(function (slide, slideIndex) {
        var isActive = slideIndex === activeIndex;
        slide.classList.toggle("is-active", isActive);
        slide.setAttribute("aria-hidden", isActive ? "false" : "true");
      });
      updateButtons();
      positionSlider(Boolean(instant));
    }

    function previous() {
      show(activeIndex - 1);
    }

    function next() {
      show(activeIndex + 1);
    }

    if (previousButton) {
      previousButton.type = "button";
      previousButton.setAttribute("aria-label", "Previous customer story");
      previousButton.addEventListener("click", previous);
    }
    if (nextButton) {
      nextButton.type = "button";
      nextButton.setAttribute("aria-label", "Next customer story");
      nextButton.addEventListener("click", next);
    }

    root.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        previous();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
      }
    });

    root.addEventListener("pointerdown", function (event) {
      pointerStartX = event.clientX;
    });
    root.addEventListener("pointerup", function (event) {
      if (pointerStartX === null) return;
      var distance = event.clientX - pointerStartX;
      pointerStartX = null;
      if (Math.abs(distance) < 50) return;
      if (distance > 0) previous();
      else next();
    });
    root.addEventListener("pointercancel", function () {
      pointerStartX = null;
    });

    function handleResize() {
      if (resizeFrame) window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(function () {
        positionSlider(true);
        resizeFrame = null;
      });
    }

    window.addEventListener("resize", handleResize, { passive: true });
    show(0, true);
  }

  function initVideoSlider(root, section) {
    if (!root || !section || root.dataset.enhanced === "true") return;

    var wrapper = root.querySelector(".swiper-wrapper");
    var slides = wrapper ? directChildren(wrapper, ".swiper-slide") : [];
    var previousButton = section.querySelector(".custom-swiper-prev");
    var nextButton = section.querySelector(".custom-swiper-next");
    var pagination = section.querySelector(".custom-swiper-pagination");
    if (!wrapper || slides.length < 2) return;

    root.dataset.enhanced = "true";
    root.classList.add("devlixe-video-slider");
    section.classList.add("devlixe-video-section");
    root.setAttribute("role", "region");
    root.setAttribute("aria-label", "Videos");
    root.setAttribute("tabindex", "0");

    var activeIndex = 0;
    var pointerStartX = null;
    var resizeFrame = null;
    var dots = [];

    function positionSlider(instant) {
      var activeSlide = slides[activeIndex];
      if (!activeSlide) return;

      if (instant) wrapper.style.transition = "none";
      var rootRect = root.getBoundingClientRect();
      var slideRect = activeSlide.getBoundingClientRect();
      var transform = window.getComputedStyle(wrapper).transform;
      var currentTransform =
        transform === "none" ? 0 : new DOMMatrix(transform).m41;
      var slideCenter =
        slideRect.left - rootRect.left - currentTransform + slideRect.width / 2;
      var target = rootRect.width / 2 - slideCenter;
      wrapper.style.transform = "translate3d(" + target + "px, 0, 0)";

      if (instant) {
        window.requestAnimationFrame(function () {
          wrapper.style.transition = "";
        });
      }
    }

    function updateControls() {
      var atStart = activeIndex === 0;
      var atEnd = activeIndex === slides.length - 1;
      if (previousButton) {
        previousButton.classList.toggle("is-disabled", atStart);
        previousButton.setAttribute("aria-disabled", atStart ? "true" : "false");
      }
      if (nextButton) {
        nextButton.classList.toggle("is-disabled", atEnd);
        nextButton.setAttribute("aria-disabled", atEnd ? "true" : "false");
      }
      dots.forEach(function (dot, index) {
        var isActive = index === activeIndex;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-current", isActive ? "true" : "false");
      });
    }

    function show(index, instant) {
      activeIndex = Math.max(0, Math.min(index, slides.length - 1));
      slides.forEach(function (slide, slideIndex) {
        var isActive = slideIndex === activeIndex;
        slide.classList.toggle("is-active", isActive);
        slide.setAttribute("aria-hidden", isActive ? "false" : "true");
      });
      updateControls();
      positionSlider(Boolean(instant));
    }

    function previous() {
      if (activeIndex > 0) show(activeIndex - 1);
    }

    function next() {
      if (activeIndex < slides.length - 1) show(activeIndex + 1);
    }

    function prepareControl(control, label, action) {
      if (!control) return;
      control.setAttribute("role", "button");
      control.setAttribute("tabindex", "0");
      control.setAttribute("aria-label", label);
      control.addEventListener("click", action);
      control.addEventListener("keydown", function (event) {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        action();
      });
    }

    prepareControl(previousButton, "Previous video", previous);
    prepareControl(nextButton, "Next video", next);

    if (pagination) {
      pagination.replaceChildren();
      slides.forEach(function (_, index) {
        var dot = document.createElement("button");
        dot.type = "button";
        dot.className = "devlixe-video-dot";
        dot.setAttribute("aria-label", "Show video " + (index + 1));
        dot.addEventListener("click", function () {
          show(index);
        });
        pagination.appendChild(dot);
        dots.push(dot);
      });
    }

    root.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        previous();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
      }
    });

    root.addEventListener("pointerdown", function (event) {
      pointerStartX = event.clientX;
    });
    root.addEventListener("pointerup", function (event) {
      if (pointerStartX === null) return;
      var distance = event.clientX - pointerStartX;
      pointerStartX = null;
      if (Math.abs(distance) < 50) return;
      if (distance > 0) previous();
      else next();
    });
    root.addEventListener("pointercancel", function () {
      pointerStartX = null;
    });

    function handleResize() {
      if (resizeFrame) window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(function () {
        positionSlider(true);
        resizeFrame = null;
      });
    }

    window.addEventListener("resize", handleResize, { passive: true });
    show(0, true);
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
    var portfolioSlider = document.querySelector(".PortfolioSlider .swiper");
    var videoHeading = Array.from(document.querySelectorAll(".chip p")).find(
      function (item) {
        return item.textContent.trim() === "VIDEOS";
      },
    );
    var videoSection = videoHeading && videoHeading.closest(".bg-gray-100");
    var videoSlider = videoSection && videoSection.querySelector(".swiper");

    initPortfolioSlider(portfolioSlider);
    initVideoSlider(videoSlider, videoSection);

    var sliders = Array.from(document.querySelectorAll(".swiper"));
    sliders.forEach(function (slider, index) {
      if (slider !== portfolioSlider && slider !== videoSlider) {
        initSimpleSlider(slider, index === 0 ? 9000 : 0);
      }
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
    initHeaderMegaMenus();
    initConceptGraph();
    initTrustedLogoMarquee();
    initHeroCarousel();
    initIndustryTabs();
    initServiceTabs();
    initProcessSection();
    initTestimonials();
    initSliders();
    initContactSection();
    initFileUploads();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
