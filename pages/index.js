import Head from "next/head";

function Home() {
  // Function/Component
  return (
    <>
      <Head>
        <link rel="stylesheet" href="../static/css/styles.css" />
      </Head>
      <main>
        <h1>Em construção</h1>
        <p>
          Esse site ainda está em processo de desenvolvimento...
          <br />
        </p>
        <div class="images">
          <a href="https://www.youtube.com/@FilipeDeschamps" target="_blank">
            <img src="../static/img/se_prepara1.png" alt="Se prepara" />
          </a>

          <a href="https://www.tabnews.com.br/" target="_blank">
            <img src="../static/img/vem_ai2.png" alt="Vem aí" />
          </a>
        </div>
        <br />
        <div class="confia">
          <a href="https://curso.dev/" target="_blank">
            <img src="../static/img/confia3.png" alt="Confia" />
          </a>
        </div>
      </main>
    </>
  );
}

export default Home;
