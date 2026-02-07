function addJob() {
  const job = {
    title: title.value,
    company: company.value,
    location: location.value,
    type: type.value,
    category: category.value,
    date: "Posted just now"
  };

  let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
  jobs.push(job);
  localStorage.setItem("jobs", JSON.stringify(jobs));

  alert("Job posted successfully!");
}
