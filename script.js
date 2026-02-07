let jobs = JSON.parse(localStorage.getItem("jobs")) || [
  {
    title: "Operations Coordinator",
    company: "Zambia Government",
    location: "Kabwe",
    type: "Full Time",
    category: "Administration",
    date: "Posted 6 days ago"
  }
];

  {
    title: "IT Support Officer",
    company: "Tech Solutions Ltd",
    location: "Lusaka",
    type: "Contract",
    category: "IT",
    date: "Posted 2 days ago"
  },
  {
    title: "Accounts Assistant",
    company: "Green Acres Fund",
    location: "Kabwe",
    type: "Internship",
    category: "Finance",
    date: "Posted 4 days ago"
  }
];

function displayJobs(filteredJobs) {
  const jobsDiv = document.getElementById("jobs");
  jobsDiv.innerHTML = "";

  filteredJobs.forEach(job => {
    const div = document.createElement("div");
    div.className = "job-card";
    div.innerHTML = `
      <h3>${job.title}</h3>
      <div class="job-meta">${job.company} — ${job.location}</div>
      <div class="job-meta">${job.type} • ${job.date}</div>
    `;
    jobsDiv.appendChild(div);
  });

  document.getElementById("resultCount").textContent =
    `Search completed. Found ${filteredJobs.length} matching records.`;
}

function searchJobs() {
  const keyword = document.getElementById("keyword").value.toLowerCase();
  const location = document.getElementById("location").value.toLowerCase();
  const category = document.getElementById("category").value;

  const selectedTypes = Array.from(
    document.querySelectorAll(".job-types input:checked")
  ).map(cb => cb.value);

  const filtered = jobs.filter(job => {
    return (
      (job.title.toLowerCase().includes(keyword) ||
        job.company.toLowerCase().includes(keyword)) &&
      job.location.toLowerCase().includes(location) &&
      (category === "" || job.category === category) &&
      selectedTypes.includes(job.type)
    );
  });

  displayJobs(filtered);
}

displayJobs(jobs);
