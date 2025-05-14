import { Octokit } from "https://cdn.jsdelivr.net/npm/@octokit/rest@21.1.1/+esm";
// fetch GitHub repos
const octokit = new Octokit();
async function fetchRepos() {
  try {
    const response = await fetch("https://pinned.berrysauce.dev/get/iustusae");
    const repos = await response.json();
    const container = document.getElementById("repo-list");

    repos.forEach((repo) => {
      const card = document.createElement("div");
      card.className = `
          bg-white dark:bg-jet/80 p-6 rounded-2xl shadow-lg
          hover:shadow-2xl transform hover:-translate-y-1 transition
          duration-300 animate-fade-in
        `;

      card.innerHTML = `
          <h3 class="text-xl font-semibold mb-2">
            <a href="https://github.com/${repo.author}/${repo.name}" target="_blank"
               class="hover:underline text-jet dark:text-peach">
              ${repo.name}
            </a>
          </h3>
          <p class="text-sm mb-4 text-jet/80 dark:text-peach/70">
            ${repo.description}
          </p>
          <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <div class="flex items-center space-x-2">
              <span class="w-3 h-3 rounded-full" style="background-color:${repo.languageColor}"></span>
              <span>${repo.language}</span>
            </div>
            <div class="flex space-x-4">
              <span>⭐ ${repo.stars}</span>
              <span>🍴 ${repo.forks}</span>
            </div>
          </div>
        `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Failed to load pinned projects:", error);
  }
}
fetchRepos();
