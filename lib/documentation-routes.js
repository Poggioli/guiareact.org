export const reactGuideRoutes = [
    {
        label: "Começando",
        pages: [
            {
                isRoute: true,
                title: "Introdução",
                slug: "docs/getting-started/intro",
                draft: false
            },
            {
                isRoute: true,
                title: "Roteiro",
                slug: "",
                draft: true
            },
        ]
    },
    {
        label: "Padrões",
        pages: [
            {
                isRoute: true,
                title: "Elementos",
                slug: "",
                draft: true
            },
            {
                isRoute: true,
                title: "Componentes",
                slug: "",
                draft: true
            },
            {
                isRoute: false,
                title: "Fragmentos",
                slug: "",
                draft: true,
                pages: [
                    {
                        title: "Sintaxe curta",
                        slug: "",
                        draft: true
                    },
                    {
                        title: "Lista de componentes",
                        slug: "",
                        draft: true
                    }
                ]
            },
            {
                isRoute: true,
                title: "Expressões",
                slug: "",
                draft: true
            },
            {
                isRoute: true,
                title: "Propriedades (props)",
                slug: "",
                draft: true
            },
            {
                isRoute: true,
                title: "Propriedades Padrão (defaultProps)",
                slug: "",
                draft: true
            },
            {
                isRoute: true,
                title: "Desestruturando Propriedades",
                slug: "",
                draft: true
            },
            {
                isRoute: true,
                title: "Atributos de spread JSX",
                slug: "",
                draft: true
            },
            {
                isRoute: true,
                title: "Propriedades desestruturadas com outros valores",
                slug: "",
                draft: true
            },
            {
                isRoute: false,
                title: "Renderização condicional",
                slug: "",
                draft: true,
                pages: [
                    {
                        title: "if (se)",
                        slug: "",
                        draft: true
                    },
                    {
                        title: "unless (ao menos que)",
                        slug: "",
                        draft: true
                    },
                    {
                        title: "if-else (operador ternário)",
                        slug: "",
                        draft: true
                    }
                ]
            },
            {
                isRoute: false,
                title: "Tipos de filhos (children types)",
                slug: "",
                draft: true,
                pages: [
                    {
                        title: "string",
                        slug: "",
                        draft: true
                    },
                    {
                        title: "array",
                        slug: "",
                        draft: true
                    },
                ]
            },
            {
                isRoute: true,
                title: "Array como filho (Array as children)",
                slug: "",
                draft: true
            },
            {
                isRoute: true,
                title: "Função como filha (Function as children)",
                slug: "",
                draft: true
            },
            {
                isRoute: true,
                title: "Render prop",
                slug: "",
                draft: true
            },
            {
                isRoute: true,
                title: "Passando um filho (children)",
                slug: "",
                draft: true
            },
            {
                isRoute: true,
                title: "Componente proxy",
                slug: "",
                draft: true
            },
            {
                isRoute: true,
                title: "Estilizando componentes",
                slug: "",
                draft: true
            },
            {
                isRoute: true,
                title: "Seitch de eventos",
                slug: "",
                draft: true
            },
            {
                isRoute: true,
                title: "Componente de layout",
                slug: "",
                draft: true
            },
            {
                isRoute: true,
                title: "Container components",
                slug: "",
                draft: true
            },
            {
                isRoute: true,
                title: "Higher-order components",
                slug: "",
                draft: true
            },
            {
                isRoute: true,
                title: "Elevando o state (state hoisting)",
                slug: "",
                draft: true
            },
            {
                isRoute: true,
                title: "Inputs controlados",
                slug: "",
                draft: true
            },
        ]
    }
]

export const allReactGuideRoutes = reactGuideRoutes.reduce((acc, curr) => {
    acc = [...acc, ...curr.pages.filter((p) => p.draft !== true)];
    return acc;
}, []);