function verificarSenha() {
  const senha = document.getElementById("senha").value;
  const resultado = document.getElementById("resultado");

  let forca = 0;

  if (senha.length >= 8) forca++;
  if (/[A-Z]/.test(senha)) forca++;
  if (/[a-z]/.test(senha)) forca++;
  if (/[0-9]/.test(senha)) forca++;
  if (/[^A-Za-z0-9]/.test(senha)) forca++;

  if (forca <= 2) {
    resultado.textContent = "Senha Fraca ⚠️";
    resultado.style.color = "red";
  } else if (forca === 3 || forca === 4) {
    resultado.textContent = "Senha Média ⚠️";
    resultado.style.color = "orange";
  } else {
    resultado.textContent = "Senha Forte ✅";
    resultado.style.color = "lightgreen";
  }
}
