new Chart(document.getElementById("dispersion"), {
    type: "scatter",
    data: {
        datasets: [
            {
                label: "Scatter Dataset",
                data: [
                    {
                        name: "BACHILLERATO EN ARTES, ARQUITECTURA Y DISEÑO EN LA UNIVERSIDAD FINIS TERRAE",
                        x: 5,
                        y: 7200000,
                    },
                    { name: "BACHILLERATO EN DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 10364360 },
                    { name: "DISEÑO EN LA UNIVERSIDAD AUSTRAL DE CHILE", x: 6, y: 5887000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD CATÓLICA DE TEMUCO", x: 5, y: 5276000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE CHILE", x: 7, y: 6486700 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE LA SERENA", x: 5, y: 4071000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE LAS AMERICAS", x: 5, y: 4730000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE PLAYA ANCHA DE CIENCIAS DE LA EDUCACION", x: 5, y: 4305000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE TALCA", x: 6, y: 5887000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE VALPARAISO", x: 6, y: 5713000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE VIÑA DEL MAR", x: 4, y: 4277000 },
                    {
                        name: "DISEÑO DE EXPERIENCIAS INMERSIVAS Y VIDEOJUEGOS EN LA UNIVERSIDAD GABRIELA MISTRAL",
                        x: 4,
                        y: 4814000,
                    },
                    {
                        name: "DISEÑO DE IMAGEN ESPECIALIDAD MODA  EN LA UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION",
                        x: 3,
                        y: 4210000,
                    },
                    {
                        name: "DISEÑO DE INTERIORES Y AMBIENTES  EN LA UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION",
                        x: 3,
                        y: 4030000,
                    },
                    { name: "DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7136000 },
                    { name: "DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 5069000 },
                    { name: "DISEÑO DE MODA Y MANAGEMENT EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7320000 },
                    { name: "DISEÑO DE VESTUARIO Y TEXTIL EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7148000 },
                    { name: "DISEÑO DE VIDEOJUEGOS EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                    { name: "DISEÑO EN ANIMACIÓN DIGITAL  EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                    {
                        name: "DISEÑO EN COMUNICACIÓN VISUAL  EN LA UTEM - UNIVERSIDAD TECNOLOGICA METROPOLITANA",
                        x: 4,
                        y: 4763300,
                    },
                    { name: "DISEÑO EN COMUNICACION VISUAL EN LA UNIVERSIDAD DE SANTIAGO DE CHILE", x: 7, y: 6552000 },
                    { name: "DISEÑO EN INTERACCION DIGITAL  EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                    { name: "DISEÑO EN LA PONTIFICIA UNIVERSIDAD CATÓLICA DE CHILE", x: 7, y: 8080000 },
                    { name: "DISEÑO EN LA PONTIFICIA UNIVERSIDAD CATÓLICA DE VALPARAÍSO", x: 7, y: 6915000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE LAS AMÉRICAS", x: 5, y: 4730000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 9754692 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 6056038 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DIEGO PORTALES", x: 6, y: 7597000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7320000 },
                    { name: "DISEÑO EN MARKETING DIGITAL EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                    { name: "DISEÑO GRÁFICO EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7065000 },
                    { name: "DISEÑO GRÁFICO EN LA UNIVERSIDAD DEL BÍO-BÍO", x: 5, y: 4307000 },
                    {
                        name: "DISEÑO GRÁFICO ESPECIALIDAD MULTIMEDIA EN LA UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION",
                        x: 3,
                        y: 4210000,
                    },
                    {
                        name: "DISEÑO GRÁFICO MENCIÓN DISEÑO ESTRATÉGICO EN LA UNIVERSIDAD DE ANTOFAGASTA",
                        x: 5,
                        y: 5120000,
                    },
                    { name: "DISEÑO INDUSTRIAL EN LA UNIVERSIDAD DE SANTIAGO DE CHILE", x: 7, y: 4989000 },
                    { name: "DISEÑO INDUSTRIAL EN LA UTEM - UNIVERSIDAD TECNOLOGICA METROPOLITANA", x: 4, y: 4891000 },
                    { name: "DISEÑO INDUSTRIAL EN LA UNIVERSIDAD DEL BÍO-BÍO", x: 5, y: 4434000 },
                    { name: "DISEÑO MENCION INDUSTRIAL/GRÁFICO/AMBIENTES EN LA UNIVERSIDAD MAYOR", x: 5, y: 7214218 },
                    { name: "DISEÑO MULTIMEDIA EN LA UNIVERSIDAD DE TARAPACA", x: 6, y: 6555000 },
                    { name: "DISEÑO TEATRAL EN LA UNIVERSIDAD DE CHILE", x: 7, y: 5492400 },
                    {
                        name: "INGENIERIA EN DISEÑO DE PRODUCTOS EN LA UNIVERSIDAD TÉCNICA FEDERICO SANTA MARIA",
                        x: 6,
                        y: 6000000,
                    },
                    { name: "INGENIERIA EN DISEÑO EN LA UNIVERSIDAD ADOLFO IBAÑEZ", x: 6, y: 9754692 },
                    {
                        name: "INGENIERIA EN FABRICACION Y DISEÑO INDUSTRIAL EN LA UNIVERSIDAD TÉCNICA FEDERICO SANTA MARIA",
                        x: 6,
                        y: 5180000,
                    },
                    {
                        name: "INGENIERIA EN REALIDAD VIRTUAL Y DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD BERNARDO O'HIGGINS",
                        x: 5,
                        y: 5900000,
                    },
                ],
                backgroundColor: "rgba(241,142,45,.75)",
                pointRadius: 5,
                pointHoverRadius: 5,
            },
            {
                label: "Línea de referencia",
                type: "line",
                data: [
                    { x: 3, y: 4030000 },
                    { x: 7, y: 8080000 },
                ],
                borderColor: "rgba(102,102,102,.2)",
                borderWidth: 1,
                pointRadius: 0,
                pointHoverRadius: 0,
                fill: false,
                tension: 0,
            },
        ],
    },
    options: {
        scales: {
            x: {
                type: "linear",
                position: "bottom",
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#ccc" },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                    callback: function (value) {
                        return Number.isInteger(value) ? value + " años" : null;
                    },
                },
            },
            y: {
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#bbb", dash: [4, 4] },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                    callback: function (value) {
                        return "$ " + value.toLocaleString("es-CL");
                    },
                },
            },
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: "#fff",
                borderColor: "#ddd",
                borderWidth: 1,
                titleColor: "#111",
                bodyColor: "#555",
                titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                bodyFont: { family: "'Georama', sans-serif", size: 11 },
                padding: 10,
                filter: function (item) {
                    return item.datasetIndex === 0;
                },
                callbacks: {
                    label: function (context) {
                        const point = context.raw;
                        return [
                            point.name,
                            "Universidad acreditada por " + point.x + " años",
                            "Arancel $ " + point.y.toLocaleString("es-CL"),
                        ];
                    },
                },
            },
        },
    },
});

// ── Gráfico: Vacantes vs Arancel promedio por universidad ─────────────

(function () {

    const privadas = [
        { name: "U. del Desarrollo", x: 355, y: 8725030 },
        { name: "U. Andrés Bello", x: 350, y: 6604500 },
        { name: "UNIACC", x: 210, y: 4257500 },
        { name: "U. Gabriela Mistral", x: 160, y: 4814000 },
        { name: "U. Finis Terrae", x: 135, y: 7280000 },
        { name: "U. Mayor", x: 70, y: 7214218 },
        { name: "U. Bernardo O'Higgins", x: 55, y: 5900000 },
        { name: "U. de las Américas", x: 51, y: 4730000 },
        { name: "U. de Viña del Mar", x: 30, y: 4277000 }
    ];

    const cruch = [
        { name: "U. Diego Portales", x: 165, y: 7597000 },
        { name: "U. del Bío-Bío", x: 100, y: 4370500 },
        { name: "UTEM", x: 100, y: 4827150 },
        { name: "U. de Chile", x: 90, y: 5989550 },
        { name: "USACH", x: 90, y: 5770500 },
        { name: "PUC", x: 80, y: 8080000 },
        { name: "U. de Valparaíso", x: 75, y: 5713000 },
        { name: "UTFSM", x: 65, y: 5726667 },
        { name: "PUCV", x: 65, y: 6915000 },
        { name: "UCT", x: 60, y: 5276000 },
        { name: "U. de Tarapacá", x: 58, y: 6555000 },
        { name: "U. de Talca", x: 45, y: 5887000 },
        { name: "U. Austral", x: 45, y: 5887000 },
        { name: "U. de La Serena", x: 40, y: 4071000 },
        { name: "U. de Antofagasta", x: 35, y: 5120000 },
        { name: "U. de Playa Ancha", x: 25, y: 4305000 }
    ];

    // ── Regresión lineal ───────────────────────────────────────────

    const todos = [...privadas, ...cruch];

    const n = todos.length;

    const sumX = todos.reduce((acc, p) => acc + p.x, 0);
    const sumY = todos.reduce((acc, p) => acc + p.y, 0);

    const sumXY = todos.reduce((acc, p) => acc + (p.x * p.y), 0);
    const sumX2 = todos.reduce((acc, p) => acc + (p.x * p.x), 0);

    const pendiente =
        (n * sumXY - sumX * sumY) /
        (n * sumX2 - sumX * sumX);

    const intercepto =
        (sumY - pendiente * sumX) / n;

    const xMin = Math.min(...todos.map(p => p.x));
    const xMax = Math.max(...todos.map(p => p.x));

    const lineaTendencia = [
        {
            x: xMin,
            y: pendiente * xMin + intercepto
        },
        {
            x: xMax,
            y: pendiente * xMax + intercepto
        }
    ];

    // ── Gráfico ────────────────────────────────────────────────────

    new Chart(document.getElementById("otro"), {

        type: "scatter",

        data: {
            datasets: [
                {
                    label: "Universidades CRUCH / estatales",
                    data: cruch,
                    backgroundColor: "rgba(53,95,175,0.85)",
                    pointRadius: 6,
                    pointHoverRadius: 8
                },

                {
                    label: "Universidades privadas",
                    data: privadas,
                    backgroundColor: "rgba(220,80,40,0.85)",
                    pointRadius: 6,
                    pointHoverRadius: 8
                },

                {
                    label: "Tendencia",
                    type: "line",
                    data: lineaTendencia,

                    borderColor: "rgba(120,120,120,0.5)",
                    borderWidth: 2,
                    borderDash: [6, 4],

                    pointRadius: 0,
                    pointHoverRadius: 0,

                    fill: false,
                    tension: 0
                }
            ]
        },

        options: {

            responsive: true,

            interaction: {
                mode: "nearest",
                intersect: true
            },

            scales: {

                x: {
                    type: "linear",

                    min: 0,
                    max: 400,

                    title: {
                        display: true,
                        text: "Vacantes semestrales"
                    },

                    grid: {
                        color: "rgba(0,0,0,0.06)"
                    },

                    border: {
                        color: "#ccc"
                    },

                    ticks: {
                        font: {
                            family: "'Georama', sans-serif",
                            size: 11
                        },
                        color: "#999"
                    }
                },

                y: {

                    min: 3500000,
                    max: 9500000,

                    title: {
                        display: true,
                        text: "Arancel anual promedio"
                    },

                    grid: {
                        color: "rgba(0,0,0,0.06)"
                    },

                    border: {
                        color: "#ccc"
                    },

                    ticks: {
                        font: {
                            family: "'Georama', sans-serif",
                            size: 11
                        },

                        color: "#999",

                        callback: function (value) {
                            return "$" + (value / 1000000).toFixed(1) + " M";
                        }
                    }
                }
            },

            plugins: {

                title: {
                    display: true,
                    

                    font: {
                        family: "'Georama', sans-serif",
                        size: 14,
                        weight: "600"
                    },

                    color: "#444",

                    padding: {
                        bottom: 20
                    }
                },

                legend: {

                    position: "top",

                    labels: {

                        filter: function (item) {
                            return item.text !== "Tendencia";
                        },

                        font: {
                            family: "'Georama', sans-serif",
                            size: 11
                        }
                    }
                },

                tooltip: {

                    filter: function (context) {
                        return context.dataset.label !== "Tendencia";
                    },

                    backgroundColor: "#fff",
                    borderColor: "#ddd",
                    borderWidth: 1,

                    titleColor: "#111",
                    bodyColor: "#555",

                    titleFont: {
                        family: "'Georama', sans-serif",
                        size: 12,
                        weight: "600"
                    },

                    bodyFont: {
                        family: "'Georama', sans-serif",
                        size: 11
                    },

                    padding: 10,

                    callbacks: {

                        title: function (context) {
                            return context[0].raw.name;
                        },

                        label: function (context) {
                            return [
                                "Vacantes: " + context.raw.x,
                                "Arancel: $" + context.raw.y.toLocaleString("es-CL")
                            ];
                        }
                    }
                }
            }
        }
    });

})();
