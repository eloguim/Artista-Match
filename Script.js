function buscar() {
  var mesInput = document.getElementById('txtmes');
  var mes = mesInput.value.trim().toLowerCase();

  var nomeArt = document.getElementById('artista'); // Get the artist name element
  var imagemArt = document.getElementById('foto'); 
  var infoArt = document.getElementById('info');

  imagemArt.innerHTML = ''; // Clear any existing content
  
  switch (mes) {
    case "janeiro":
      nomeArt.innerText = "Blue Ivy"; // Set the artist name
      infoArt.innerText = '07/Janeiro';
      // criação da imagem:
      var image = document.createElement("img");
      image.src = "Fotos/JANEIRO.jpg"; // Replace with your actual image path
      image.alt = "Janeiro Image";
      imagemArt.appendChild(image);
      image.style.width = "300px";
      image.style.height = "300px";
      break;

      
    case "fevereiro":
      nomeArt.innerText = "Harry Styles"; // Set the artist name
      infoArt.innerText = '02/Fevereiro';
      // criação da imagem:
      var image = document.createElement("img");
      image.src = "Fotos/FEVEREIRO.jpg"; // Replace with your actual image path
      image.alt = "Fevereiro Image";
      imagemArt.appendChild(image);
      image.style.width = "300px";
      image.style.height = "300px";
      break;

      
      case "março":
      nomeArt.innerText = "Justin Biber"; // Set the artist name
      infoArt.innerText = '01/Março';
      // criação da imagem:
      var image = document.createElement("img");
      image.src = "Fotos/MARÇO.jpg"; // Replace with your actual image path
      image.alt = "Março Image";
      imagemArt.appendChild(image);
      image.style.width = "300px";
      image.style.height = "300px";
      break;

      
      case "abril":
      nomeArt.innerText = "Kehlani"; // Set the artist name
      infoArt.innerText = '24/Abril';
      // criação da imagem:
      var image = document.createElement("img");
      image.src = "Fotos/ABRIL.jpg"; // Replace with your actual image path
      image.alt = "Abril Image";
      imagemArt.appendChild(image);
      image.style.width = "300px";
      image.style.height = "300px";
      break;

      case "maio":
      nomeArt.innerText = "Sabrina Carpenter"; // Set the artist name
      infoArt.innerText = '11/05';
      // criação da imagem:
      var image = document.createElement("img");
      image.src = "Fotos/MAIO.jpg"; // Replace with your actual image path
      image.alt = "Maio Image";
      imagemArt.appendChild(image);
      image.style.width = "300px";
      image.style.height = "300px";
      break;

      case "junho":
      nomeArt.innerText = "Ariana Grande"; // Set the artist name
      infoArt.innerText = '26/06';
      // criação da imagem:
      var image = document.createElement("img");
      image.src = "Fotos/JUNHO.jpg"; // Replace with your actual image path
      image.alt = "Junho Image";
      imagemArt.appendChild(image);
      image.style.width = "300px";
      image.style.height = "300px";
      break;

      case "julho":
      nomeArt.innerText = "Selena Gomez"; // Set the artist name
      infoArt.innerText = '22/07';
      // criação da imagem:
      var image = document.createElement("img");
      image.src = "Fotos/JULHO.jpg"; // Replace with your actual image path
      image.alt = "Julho Image";
      imagemArt.appendChild(image);
      image.style.width = "300px";
      image.style.height = "300px";
      break;
      
    // Add cases for other months if needed...
    default:
      break;
  }
}
