const jobsRef = db.collection("jobs");

function displayJobs(jobs) {
  const jobsDiv = document.getElementById("jobs");
  jobsDiv.innerHTML = "";

  if (jobs.length === 0) {
    jobsDiv.innerHTML = "<p>No jobs posted yet.</p>";
    return;
  }

  jobs.forEach(job => {
    const div = document.createElement("div");
    div.className = "job-card";
    div.innerHTML = `
      <h3>${job.title}</h3>
      <div>${job.company} — ${job.location}</div>
      <div>${job.type} • ${job.category}</div>
    `;
    jobsDiv.appendChild(div);
  });

  document.getElementById("resultCount").textContent =
    `Found ${jobs.length} jobs`;
}

jobsRef.orderBy("createdAt", "desc").onSnapshot(snapshot => {
  let jobs = [];
  snapshot.forEach(doc => jobs.push(doc.data()));
  displayJobs(jobs);
});
