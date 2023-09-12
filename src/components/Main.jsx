import React from 'react';


export default function Main({ data }) {

  const imgSrc = data.image.url;
  const heroName = data.name;
  const publisher = data.biography.publisher === "" || data.biography.publisher === "null"
    ? "N/A"
    : data.biography.publisher;

  const aliases = Array.isArray(data.biography.aliases) && data.biography.aliases.includes("-")
    ? "N/A"
    : data.biography.aliases.join(", ");

  const firstAppearance = data.biography["first-appearance"] === "-"
    ? "N/A"
    : data.biography["first-appearance"];

  const alignment = data.biography.alignment === "null" || data.biography.alignment === "-" 
    ? "N/A" 
    : data.biography.alignment;

  const affiliation = data.connections["group-affiliation"] === "-" 
    ? "N/A" 
    : data.connections["group-affiliation"];

  return (
    <main>
      <img src={imgSrc} alt={data.name}/>
      <h2>{heroName}</h2>
      <h5>Details</h5>
      <ul>
        <li>Publisher: {publisher}</li>
        <li>Aliases: {aliases}</li>
        <li>First Appearance: {firstAppearance}</li>
        <li>Alignment: {alignment}</li>
        <li>Affiliation: {affiliation}</li>
      </ul>
    </main>
  )
}
