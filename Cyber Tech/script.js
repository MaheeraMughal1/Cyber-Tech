
// ==========================================
// CYBER TECH - MAIN JAVASCRIPT
// Vanilla JavaScript - No Frameworks
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

  // ========================================
  // 1. MOBILE NAVIGATION
  // ========================================

  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  function closeMenu() {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );

    menuToggle.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", event => {
    if (
      navMenu.classList.contains("open") &&
      !navMenu.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 850) {
      closeMenu();
    }
  });


  // ========================================
  // 2. SMOOTH SCROLLING
  // ========================================

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


  // ========================================
  // 3. CYBERSECURITY TOOL SEARCH
  // ========================================

  const toolSearch = document.getElementById("toolSearch");
  const toolCards = document.querySelectorAll(".tool-card");
  const toolEmpty = document.getElementById("toolEmpty");

  toolSearch.addEventListener("input", () => {

    const query = toolSearch.value.toLowerCase().trim();

    let visibleCount = 0;

    toolCards.forEach(card => {

      const searchableText =
        (card.dataset.search || "") +
        " " +
        card.textContent;

      const matches = searchableText.toLowerCase().includes(query);

      card.hidden = !matches;

      if (matches) visibleCount++;

    });

    toolEmpty.hidden = visibleCount !== 0;

  });


  // ========================================
  // 4. LEARNING RESOURCE FILTERS
  // ========================================

  const resourceFilters = document.getElementById("resourceFilters");

  const resourceCards = document.querySelectorAll(".resource-card");

  resourceFilters.addEventListener("click", event => {

    const button = event.target.closest(".filter-btn");

    if (!button) return;

    const selectedFilter = button.dataset.filter;

    // Update active button
    resourceFilters.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    // Filter cards
    resourceCards.forEach(card => {

      const level = card.dataset.level;

      const matches =
        selectedFilter === "all" ||
        selectedFilter === level;

      card.hidden = !matches;

    });

  });


  // ========================================
  // 5. TUTORIAL SEARCH
  // ========================================

  const tutorialSearch = document.getElementById("tutorialSearch");

  const tutorialCards = document.querySelectorAll(".tutorial-card");

  const tutorialEmpty = document.getElementById("tutorialEmpty");

  tutorialSearch.addEventListener("input", () => {

    const query = tutorialSearch.value.toLowerCase().trim();

    let visibleCount = 0;

    tutorialCards.forEach(card => {

      const searchableText =
        (card.dataset.search || "") +
        " " +
        card.textContent;

      const matches = searchableText.toLowerCase().includes(query);

      card.hidden = !matches;

      if (matches) visibleCount++;

    });

    tutorialEmpty.hidden = visibleCount !== 0;

  });


  // ========================================
  // 6. TUTORIAL CONTENT DATABASE
  // ========================================

  const tutorials = [

    {
      title: "Introduction to Cybersecurity",

      introduction:
        "Cybersecurity is the practice of protecting digital systems, networks, applications, and personal information against unauthorized access and cyber threats.",

      objectives: [
        "Understand the meaning of cybersecurity.",
        "Learn about confidentiality, integrity, and availability.",
        "Identify common cyber threats.",
        "Understand the importance of digital protection."
      ],

      lesson:
        "The CIA triad is one of the fundamental concepts of cybersecurity. Confidentiality means keeping information accessible only to authorized people. Integrity ensures information remains accurate and trustworthy. Availability means systems and information remain accessible when needed.",

      takeaway:
        "Cybersecurity is not just about technology. It also involves responsible behavior, awareness, and good security practices."
    },

    {
      title: "Understanding Ethical Hacking",

      introduction:
        "Ethical hacking is the authorized process of examining computer systems and applications to identify security weaknesses.",

      objectives: [
        "Understand ethical hacking.",
        "Learn the difference between ethical and malicious hacking.",
        "Discover penetration testing fundamentals.",
        "Understand permission and legal boundaries."
      ],

      lesson:
        "Ethical hackers work with explicit authorization from system owners. They assess security controls, document vulnerabilities, and provide recommendations to improve protection. A professional security assessment follows an agreed scope and rules of engagement.",

      takeaway:
        "Never test a website, network, or device without permission. Use dedicated training labs to develop practical skills."
    },

    {
      title: "Introduction to Kali Linux",

      introduction:
        "Kali Linux is a Debian-based Linux distribution designed for penetration testing, security research, and digital forensics.",

      objectives: [
        "Understand what Kali Linux is.",
        "Learn about its desktop environment.",
        "Discover its security tool categories.",
        "Understand the importance of Linux commands."
      ],

      lesson:
        "Kali Linux includes tools for network analysis, vulnerability assessment, digital forensics, and security testing. Beginners should first become familiar with Linux navigation, files, directories, and permissions.",

      takeaway:
        "Start by learning basic Linux commands and explore Kali Linux in a virtual machine or dedicated lab."
    },

    {
      title: "Basic Networking Concepts",

      introduction:
        "Computer networking allows devices to communicate and exchange information through wired or wireless connections.",

      objectives: [
        "Understand computer networks.",
        "Learn about routers and switches.",
        "Discover TCP and UDP.",
        "Understand the OSI networking model."
      ],

      lesson:
        "A router connects different networks, while a switch connects devices within a local network. TCP provides reliable, ordered communication, whereas UDP offers connectionless communication. The OSI model divides network communication into seven conceptual layers.",

      takeaway:
        "Networking fundamentals are essential for understanding firewalls, network monitoring, and cybersecurity."
    },

    {
      title: "Understanding IP Addresses",

      introduction:
        "An Internet Protocol address identifies a device or network interface for communication across IP networks.",

      objectives: [
        "Understand IPv4 and IPv6.",
        "Learn public and private IP addresses.",
        "Understand basic network addressing.",
        "Discover the role of IP addresses."
      ],

      lesson:
        "IPv4 uses 32-bit addresses, such as 192.168.1.1. IPv6 uses 128-bit addresses and supports a much larger address space. Private IP addresses are used within local networks, while public addresses are used for internet routing.",

      takeaway:
        "Understanding IP addresses helps you learn networking, network security, and troubleshooting."
    },

    {
      title: "Password Security and Protection",

      introduction:
        "Passwords help protect digital accounts, personal information, and sensitive online services.",

      objectives: [
        "Understand password strength.",
        "Learn why password reuse is dangerous.",
        "Discover password managers.",
        "Understand multi-factor authentication."
      ],

      lesson:
        "Strong passwords should be long, unique, and difficult to guess. Password managers can generate and store unique credentials. Multi-factor authentication adds another verification step, making unauthorized account access more difficult.",

      takeaway:
        "Use unique passwords for every account, enable multi-factor authentication, and never share verification codes."
    },

    {
      title: "Understanding Phishing Attacks",

      introduction:
        "Phishing is a social engineering technique in which attackers impersonate trusted people or organizations to trick users into revealing sensitive information.",

      objectives: [
        "Understand phishing attacks.",
        "Recognize suspicious emails.",
        "Identify misleading links.",
        "Learn how to report suspicious messages."
      ],

      lesson:
        "Phishing messages may contain urgent language, unexpected attachments, suspicious links, or requests for passwords and financial information. Always verify the sender through an independent trusted channel before taking action.",

      takeaway:
        "Never click suspicious links or share passwords and verification codes in response to unexpected messages."
    },

    {
      title: "Introduction to Firewalls",

      introduction:
        "A firewall is a security control that monitors and filters incoming and outgoing network traffic according to defined rules.",

      objectives: [
        "Understand firewall technology.",
        "Learn about network traffic filtering.",
        "Discover firewall rules.",
        "Understand host-based and network firewalls."
      ],

      lesson:
        "Firewalls can allow or block traffic based on factors such as IP addresses, ports, protocols, and application rules. Host-based firewalls protect individual devices, while network firewalls help protect entire network segments.",

      takeaway:
        "Firewalls are an important security layer, but they should be combined with updates, secure authentication, and other protection measures."
    },

    {
      title: "Web Application Security Basics",

      introduction:
        "Web application security focuses on protecting websites, APIs, and online applications against vulnerabilities and unauthorized access.",

      objectives: [
        "Understand common web vulnerabilities.",
        "Discover the OWASP Top 10.",
        "Learn about secure authentication.",
        "Understand input validation and access control."
      ],

      lesson:
        "Web applications may face risks such as injection, broken access control, security misconfiguration, and authentication weaknesses. Developers should validate inputs, use secure session management, apply access controls, and follow secure coding practices.",

      takeaway:
        "Explore OWASP documentation and PortSwigger Web Security Academy for structured learning and authorized practice labs."
    },

    {
      title: "Understanding Encryption and Hashing",

      introduction:
        "Encryption and hashing are important cryptographic techniques used to protect information and support digital security.",

      objectives: [
        "Understand encryption.",
        "Learn symmetric and asymmetric cryptography.",
        "Discover cryptographic hashing.",
        "Understand the difference between encryption and hashing."
      ],

      lesson:
        "Encryption transforms readable data into ciphertext using a cryptographic key so authorized parties can recover the original information. Hashing produces a fixed-length digest and is designed to be one-way. Passwords should be stored using dedicated password hashing algorithms such as Argon2id, scrypt, or bcrypt with appropriate salts.",

      takeaway:
        "Encryption protects confidentiality, while hashing supports integrity checks and secure password verification."
    }

  ];


  // ========================================
  // 7. TUTORIAL MODAL
  // ========================================

  const tutorialModal = document.getElementById("tutorialModal");

  const modalTitle = document.getElementById("modalTitle");

  const modalBody = document.getElementById("modalBody");

  const modalClose = document.getElementById("modalClose");

  let previousFocus = null;

  function openTutorial(index) {

    const tutorial = tutorials[index];

    if (!tutorial) return;

    previousFocus = document.activeElement;

    modalTitle.textContent = tutorial.title;

    // Build content safely using DOM elements.
    modalBody.replaceChildren();

    const introHeading = document.createElement("h3");
    introHeading.textContent = "Introduction";

    const introText = document.createElement("p");
    introText.textContent = tutorial.introduction;

    const objectiveHeading = document.createElement("h3");
    objectiveHeading.textContent = "Learning Objectives";

    const objectiveList = document.createElement("ul");

    tutorial.objectives.forEach(objective => {

      const item = document.createElement("li");

      item.textContent = objective;

      objectiveList.appendChild(item);

    });

    const lessonHeading = document.createElement("h3");
    lessonHeading.textContent = "Learn the Concept";

    const lessonText = document.createElement("p");
    lessonText.textContent = tutorial.lesson;

    const takeawayHeading = document.createElement("h3");
    takeawayHeading.textContent = "Key Takeaway";

    const takeawayText = document.createElement("p");
    takeawayText.textContent = tutorial.takeaway;

    modalBody.append(
      introHeading,
      introText,
      objectiveHeading,
      objectiveList,
      lessonHeading,
      lessonText,
      takeawayHeading,
      takeawayText
    );

    tutorialModal.classList.add("open");

    tutorialModal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    modalClose.focus();

  }

  function closeTutorial() {

    tutorialModal.classList.remove("open");

    tutorialModal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    if (previousFocus && previousFocus.isConnected) {
      previousFocus.focus();
    }

  }

  document.querySelectorAll(".tutorial-btn").forEach(button => {

    button.addEventListener("click", () => {

      const index = Number(button.dataset.tutorial);

      openTutorial(index);

    });

  });

  modalClose.addEventListener("click", closeTutorial);

  tutorialModal.addEventListener("click", event => {

    if (event.target === tutorialModal) {
      closeTutorial();
    }

  });


  // ========================================
  // 8. KEYBOARD ACCESSIBILITY
  // ========================================

  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

      if (tutorialModal.classList.contains("open")) {
        closeTutorial();
      }

      if (navMenu.classList.contains("open")) {
        closeMenu();
      }

    }

    // Keep keyboard focus inside the open modal.
    if (
      event.key === "Tab" &&
      tutorialModal.classList.contains("open")
    ) {

      const focusable = tutorialModal.querySelectorAll(
        'button, a[href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );

      const first = focusable[0];

      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }

    }

  });


  // ========================================
  // 9. FAQ ACCORDION
  // ========================================

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {

    item.addEventListener("toggle", () => {

      if (item.open) {

        faqItems.forEach(otherItem => {

          if (otherItem !== item) {
            otherItem.open = false;
          }

        });

      }

    });

  });


  // ========================================
  // 10. ANIMATED SCROLL REVEALS
  // ========================================

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -30px 0px"
      }
    );

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });

  } else {

    revealElements.forEach(element => {
      element.classList.add("show");
    });

  }


  // ========================================
  // 11. ANIMATED STATISTICS COUNTERS
  // ========================================

  const counters = document.querySelectorAll(".counter");

  function animateCounter(counter) {

    const target = Number(counter.dataset.count);

    if (!Number.isFinite(target) || target < 0) return;

    const duration = 1400;

    const startTime = performance.now();

    function updateCounter(currentTime) {

      const elapsed = currentTime - startTime;

      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out animation.
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const currentValue = Math.floor(
        easedProgress * target
      );

      counter.textContent = currentValue;

      if (progress < 1) {

        requestAnimationFrame(updateCounter);

      } else {

        counter.textContent = target + "+";

      }

    }

    requestAnimationFrame(updateCounter);

  }

  if ("IntersectionObserver" in window) {

    const counterObserver = new IntersectionObserver(
      (entries, observer) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            animateCounter(entry.target);

            observer.unobserve(entry.target);

          }

        });

      },
      { threshold: 0.5 }
    );

    counters.forEach(counter => {
      counterObserver.observe(counter);
    });

  } else {

    counters.forEach(counter => {
      counter.textContent = counter.dataset.count + "+";
    });

  }


  // ========================================
  // 12. BACK TO TOP BUTTON
  // ========================================

  const backToTop = document.getElementById("backToTop");

  function updateBackToTop() {

    if (window.scrollY > 450) {

      backToTop.classList.add("visible");

    } else {

      backToTop.classList.remove("visible");

    }

  }

  window.addEventListener("scroll", updateBackToTop, {
    passive: true
  });

  updateBackToTop();

  backToTop.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });


  // ========================================
  // 13. CONTACT FORM VALIDATION
  // ========================================

  const contactForm = document.getElementById("contactForm");

  const formFeedback = document.getElementById("formFeedback");

  const formFields = [
    document.getElementById("name"),
    document.getElementById("email"),
    document.getElementById("subject"),
    document.getElementById("message")
  ];

  // Remove error styling while the user edits.
  formFields.forEach(field => {

    field.addEventListener("input", () => {

      field.classList.remove("invalid");

      formFeedback.textContent = "";

      formFeedback.className = "form-feedback";

    });

  });

  function validateEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  }

  contactForm.addEventListener("submit", event => {

    event.preventDefault();

    formFeedback.textContent = "";

    formFeedback.className = "form-feedback";

    let isValid = true;

    const name = document.getElementById("name");

    const email = document.getElementById("email");

    const subject = document.getElementById("subject");

    const message = document.getElementById("message");

    // Validate name.
    if (
      name.value.trim().length < 2 ||
      name.value.trim().length > 80
    ) {

      name.classList.add("invalid");

      isValid = false;

    }

    // Validate email.
    if (
      !validateEmail(email.value.trim()) ||
      email.value.trim().length > 120
    ) {

      email.classList.add("invalid");

      isValid = false;

    }

    // Validate subject.
    if (
      subject.value.trim().length < 2 ||
      subject.value.trim().length > 120
    ) {

      subject.classList.add("invalid");

      isValid = false;

    }

    // Validate message.
    if (
      message.value.trim().length < 10 ||
      message.value.trim().length > 2000
    ) {

      message.classList.add("invalid");

      isValid = false;

    }

    if (!isValid) {

      formFeedback.textContent =
        "Please check all fields and enter valid information.";

      formFeedback.classList.add("error");

      const firstInvalid = contactForm.querySelector(".invalid");

      if (firstInvalid) {
        firstInvalid.focus();
      }

      return;

    }

    // Frontend-only success. No server request is made.
    formFeedback.textContent =
      "Your information has passed validation! This demo does not send messages to a server.";

    formFeedback.classList.add("success");

    contactForm.reset();

    formFields.forEach(field => {
      field.classList.remove("invalid");
    });

  });


  // ========================================
  // 14. AUTOMATIC COPYRIGHT YEAR
  // ========================================

  document.getElementById("year").textContent =
    new Date().getFullYear();


  // ========================================
  // 15. EXTERNAL LINK SAFETY
  // ========================================

  document.querySelectorAll('a[target="_blank"]').forEach(link => {

    link.setAttribute("rel", "noopener noreferrer");

  });


  // ========================================
  // CYBER TECH INITIALIZATION COMPLETE
  // ========================================

  console.log(
    "%c Cyber Tech ",
    "background:#283618;color:#DDA15E;font-size:20px;font-weight:bold;padding:10px;"
  );

  console.log(
    "Cybersecurity Learning Platform Initialized Successfully."
  );

});
