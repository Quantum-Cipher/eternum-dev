async function injectContent(id, file) {
  const res = await fetch(`sections/${file}`);
  const content = await res.text();
  document.getElementById(id).innerHTML = content;
}

injectContent("mission", "mission.html");
injectContent("blueprints", "blueprints.html");
injectContent("manifesto", "manifesto.html");
