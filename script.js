document.addEventListener("DOMContentLoaded", () => {
  loadComponent("components/SidebarNav.html", "sidebar-container");
  renderTaskButtons();
});

function loadComponent(url, containerId) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(containerId).innerHTML = data;
    });
}

function renderTaskButtons() {
  const task_buttons_container = document.getElementById("task-buttons");
  const tasks = [
    { title: "Backup Files", color: "mint", icon: "backup.svg", action: "runTask('Backup Company File')" },
    { title: "Run Payroll", color: "coral", icon: "payroll.svg", action: "openPayrollModal()" },
    { title: "Email Reports", color: "sky", icon: "email.svg", action: "runTask('Email Reports')" },
    { title: "Create Invoice", color: "pink", icon: "invoice.svg", action: "runTask('Create Invoice')" },
    { title: "Ask Agent Betty", color: "lilac", icon: "chat.svg", action: "runTask('Ask Agent Betty')" },
    { title: "Reconcile", color: "peach", icon: "reconcile.svg", action: "runTask('Reconcile Bank Account')" },
    { title: "View P&L", color: "green", icon: "profit.svg", action: "runTask('View Profit and Loss')" },
    { title: "Quarterly Reports", color: "lemon", icon: "report.svg", action: "runTask('Generate Quarterly Reports')" },
  ];

  fetch("components/TaskButton.html")
    .then((response) => response.text())
    .then((template) => {
      tasks.forEach((task) => {
        let buttonHtml = template;
        buttonHtml = buttonHtml.replace(/{{title}}/g, task.title);
        buttonHtml = buttonHtml.replace("{{color}}", task.color);
        buttonHtml = buttonHtml.replace("{{icon}}", task.icon);
        buttonHtml = buttonHtml.replace("{{action}}", task.action);
        task_buttons_container.innerHTML += buttonHtml;
      });
    });
}

function logMessage(message) {
  const log = document.getElementById("log");
  const li = document.createElement("li");
  li.textContent = message;
  log.appendChild(li);
  log.scrollTop = log.scrollHeight;
}

function runTask(taskName) {
  logMessage(`🟢 Starting: ${taskName}...`);

  if (taskName === "Run Payroll") {
    openPayrollModal();
    return;
  }

  if (taskName === "Backup Company File") {
    const steps = [
      "Opening QuickBooks Desktop and loading the company file...",
      "Navigating to File > Back Up Company > Create Local Backup...",
      "Selecting backup type: Local Backup...",
      "Choosing backup location: C:/QuickBooksBackups...",
      "Reviewing backup options (automatic + immediate backup)...",
      "Initiating file save to selected location...",
      "Verifying backup file integrity...",
      "Backup complete ✅ Confirmation message received.",
      "Reminder: Save your backup to a secure external location.",
      "Tip: Set up automatic backups for better safety."
    ];

    let delay = 0;
    steps.forEach((step) => {
      setTimeout(() => {
        logMessage(`🛠️ ${step}`);
      }, delay);
      delay += 1200;
    });

    setTimeout(() => {
      logMessage(`✅ Company file backed up successfully.`);
    }, delay + 500);

    return;
  }

  // Default fallback for all other tasks
  setTimeout(() => {
    logMessage(`✅ ${taskName} completed successfully.`);
  }, 3000);

  setTimeout(() => {
    logMessage(`✅ ${taskName} completed successfully.`);
  }, 3000);
}

function openPayrollModal() {
  document.getElementById("payrollModal").classList.remove("hidden");
}

function closePayrollModal() {
  document.getElementById("payrollModal").classList.add("hidden");
}

function submitPayroll() {
  const name = document.getElementById("employeeName").value;
  const hours = document.getElementById("hoursWorked").value;
  const frequency = document.getElementById("frequency").value;

  if (!name || !hours) {
    alert("Please fill in all fields.");
    return;
  }

function approvePayroll() {
  document.getElementById("approvalModal").classList.add("hidden");
  logMessage("✅ Payroll approved.");
}

function approveAndPrint() {
  document.getElementById("approvalModal").classList.add("hidden");
  logMessage("✅ Payroll approved and sent to printer.");
  window.print(); // or simulate print behavior
}

function goBackFromApproval() {
  document.getElementById("approvalModal").classList.add("hidden");
  logMessage("↩️ Went back to review payroll.");
}

  closePayrollModal();

  const steps = [
    "Accessing QuickBooks Payroll system...",
    "Selecting payroll schedule: " + frequency,
    "Verifying pay period and pay date...",
    `Selecting employee: ${name}`,
    `Entering hours worked: ${hours}`,
    "Calculating compensation and verifying details...",
    "Reviewing payroll summary...",
    "Submitting payroll...",
    "Printing paychecks if needed...",
    "Finishing payroll process..."
  ];

  let delay = 0;
  steps.forEach((step) => {
    setTimeout(() => {
      logMessage(`🛠️ ${step}`);
    }, delay);
    delay += 1000;
  });

  setTimeout(() => {
  logMessage(`✅ Payroll for ${name} completed successfully.`);
  
  // Show approval modal
  document.getElementById("approvalModal").classList.remove("hidden");
}, delay + 500);

  // Reset fields
  document.getElementById("employeeName").value = "";
  document.getElementById("hoursWorked").value = "";
  document.getElementById("frequency").value = "Weekly";
}
