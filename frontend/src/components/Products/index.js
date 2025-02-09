import React, { useState, useEffect } from 'react';

function Products() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/produtos/lista')
      .then(response => response.json())
      .then(data => {
        setProdutos(data);  
        setLoading(false);  
      })
      .catch(error => {
        console.error('Erro ao buscar os produtos:', error);
        setLoading(false);
      });
  });

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {produtos.map((produto) => (
            <div className="col mb-5" key={produto.id}>
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src={`http://127.0.0.1:8000/${produto.foto}`}
                  alt={produto.titulo}
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">{produto.titulo}</h5>
                    <p>{produto.descricao}</p>
                    <p>R${produto.valor}</p>
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a className="btn btn-outline-dark mt-auto" href="#">
                      Comprar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
