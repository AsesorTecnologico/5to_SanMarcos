// Datos de los cursos con sus logos e información
const coursesData = {
    courses: [
        {
            id: 1,
            name: "Aritmética",
            description: "Números, operaciones básicas, fracciones, decimales y más.",
            icon: "fas fa-calculator",
            color: "#0a4d8c"
        },
        {
            id: 2,
            name: "Álgebra",
            description: "Expresiones algebraicas, ecuaciones, funciones y polinomios.",
            icon: "fas fa-square-root-alt",
            color: "#e63946"
        },
        {
            id: 3,
            name: "Biología",
            description: "Células, seres vivos, ecosistemas y anatomía humana.",
            icon: "fas fa-dna",
            color: "#2a9d8f"
        },
        {
            id: 4,
            name: "Física",
            description: "Movimiento, fuerzas, energía, ondas y electricidad.",
            icon: "fas fa-atom",
            color: "#9d4edd"
        },
        {
            id: 5,
            name: "Geografía",
            description: "Relieve, clima, recursos naturales y cartografía.",
            icon: "fas fa-globe-americas",
            color: "#40916c"
        },
        {
            id: 6,
            name: "Geometría",
            description: "Figuras geométricas, medición, propiedades y transformaciones.",
            icon: "fas fa-draw-polygon",
            color: "#3a86ff"
        },
        {
            id: 7,
            name: "Historia del Perú",
            description: "Culturas preincas, imperio inca, conquista y república.",
            icon: "fas fa-landmark",
            color: "#dda15e"
        },
        {
            id: 8,
            name: "Historia Universal",
            description: "Edades históricas, guerras mundiales y civilizaciones antiguas.",
            icon: "fas fa-monument",
            color: "#bc6c25"
        },
        {
            id: 9,
            name: "Inglés",
            description: "Gramática, vocabulario, comprensión auditiva y conversación.",
            icon: "fas fa-language",
            color: "#7209b7"
        },
        {
            id: 10,
            name: "Lenguaje",
            description: "Gramática, comunicación, comprensión lectora y redacción.",
            icon: "fas fa-spell-check",
            color: "#3a86ff"
        },
        {
            id: 11,
            name: "Literatura",
            description: "Géneros literarios, autores, obras y análisis textual.",
            icon: "fas fa-book-open",
            color: "#8338ec"
        },
        {
            id: 12,
            name: "Psicología",
            description: "Procesos mentales, emociones, desarrollo humano y conducta.",
            icon: "fas fa-brain",
            color: "#ff006e"
        },
        {
            id: 13,
            name: "Química",
            description: "Elementos, compuestos, reacciones y tabla periódica.",
            icon: "fas fa-flask",
            color: "#fb5607"
        },
        {
            id: 14,
            name: "Razonamiento Matemático",
            description: "Problemas lógicos, secuencias, analogías y patrones.",
            icon: "fas fa-puzzle-piece",
            color: "#3d405b"
        },
        {
            id: 15,
            name: "Razonamiento Verbal",
            description: "Sinónimos, antónimos, analogías verbales y comprensión.",
            icon: "fas fa-comment-alt",
            color: "#588157"
        },
        {
            id: 16,
            name: "Trigonometría",
            description: "Triángulos, funciones trigonométricas, identidades y aplicaciones.",
            icon: "fas fa-shapes",
            color: "#1d3557"
        },
        {
            id: 17,
            name: "Economía",
            description: "Sistemas económicos, oferta y demanda, mercado y finanzas.",
            icon: "fas fa-chart-line",
            color: "#2d6a4f"
        }
    ],
    
    // Definición de Tomos e Intensivos
    selectors: {
        tomos: [
            { id: "tomo-i", name: "Tomo I", icon: "fas fa-book", color: "#2a9d8f" },
            { id: "tomo-ii", name: "Tomo II", icon: "fas fa-book", color: "#2a9d8f" },
            { id: "tomo-iii", name: "Tomo III", icon: "fas fa-book", color: "#2a9d8f" },
            { id: "tomo-iv", name: "Tomo IV", icon: "fas fa-book", color: "#2a9d8f" },
            { id: "tomo-v", name: "Tomo V", icon: "fas fa-book", color: "#2a9d8f" },
            { id: "tomo-vi", name: "Tomo VI", icon: "fas fa-book", color: "#2a9d8f" }
        ],
        intensivos: [
            { id: "intensivo-i", name: "Intensivo I", icon: "fas fa-bolt", color: "#9d4edd" },
            { id: "intensivo-ii", name: "Intensivo II", icon: "fas fa-bolt", color: "#9d4edd" },
            { id: "intensivo-iii", name: "Intensivo III", icon: "fas fa-bolt", color: "#9d4edd" }
        ]
    },
    
    // Enlaces de Google Drive por selector, año y curso
    // NOTA: Estos son enlaces de ejemplo. Reemplázalos con los enlaces reales de Google Drive
    driveLinks: {
        "tomo-i": {
            2025: {
                1: "https://drive.google.com/drive/folders/1SykX72K_u8-G32HNtBnfcc1WOwlkxUZm?usp=drive_link",
                2: "https://drive.google.com/drive/folders/153OEOZCKul5vMUqZQndOg776cMHZVga4?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1WZOpg5SujMPLCGBsdWhYVuzlV9p2AWMb?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1s3BazfC9vEEPPfGgAKIWf8dypIG7YZD_?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1t4YQgCQCjCTXEIqRGhvDx2NOHzvO6Pmk?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1tZy_ARiCdoPOX66Bwl8XDCwnSpkazt3O?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1SZ4ec3Dk8kJ-cHEefXEJAdx9axW2pHwO?usp=drive_link",
                8: "https://drive.google.com/drive/folders/1OHii7BJS5tvyJ36QQkYzhQpJ0NqtEraP?usp=drive_link",
                9: "https://drive.google.com/drive/folders/1MvEI2r5ynpur6_4QE_xjMiIZ_fndw22R?usp=drive_link",
                10: "https://drive.google.com/drive/folders/1LFfMh9Ji8twC6KyeFx-GUNZkEsKZngz1?usp=drive_link",
                11: "https://drive.google.com/drive/folders/1Gv8jbJLCrh7_EsAcfJw-1kQkkZB2bsPb?usp=drive_link",
                12: "https://drive.google.com/drive/folders/1ajfX23EbyzdazgD-G7WDNVGmJkRm6-HB?usp=drive_link",
                13: "https://drive.google.com/drive/folders/1-1FzxMavtnAoaVftxzGmd9WnaBphf1ag?usp=drive_link",
                14: "https://drive.google.com/drive/folders/1cvY_foOVWnj1cBMKvOUt-R5yqPbww5xC?usp=drive_link",
                15: "https://drive.google.com/drive/folders/1DWrJtzgR_0ZiN9244yahbKSfLnMD1vn0?usp=drive_link",
                16: "https://drive.google.com/drive/folders/1pHj14W82M4b4xFzIsmTdeYklu_vWwliD?usp=drive_link",
                17: "https://drive.google.com/drive/folders/11_I9zIcJyFKewUGYVlHfDn9I645SPp1q?usp=drive_link"
            },
            2026: {
                1: "https://drive.google.com/drive/folders/1geJz8nE1V82OtzfrlClZjCOFzD4pWd4H?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1tCpcW-wq24ipVHfzQudbaqq4CuC75KHH?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1Bz371vtk_GW4niL3rO2h81H_zqod6V19?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1uynyFF34E_-iQ5JtDb8pBdG4adcmhbdG?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1eAaa_qMSjo0sIdjLh5nV-bu3g1AOVULL?usp=drive_link",
                6: "https://drive.google.com/drive/folders/13-HkxJ-6VC5ZEQgPuTHyqi6lGb7mpIjN?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1bGDH21eVhqPWmye4sR_ndeMUFiXCYTGe?usp=drive_link",
                8: "https://drive.google.com/drive/folders/1BddKaxdfP-JZNPZPSEJZ0sQ_YVludJCk?usp=drive_link",
                9: "https://drive.google.com/drive/folders/1mY2qPVxhJCsR4GNs2Qj5WNxWVDND-St9?usp=drive_link",
                10: "https://drive.google.com/drive/folders/1B0wqT7xlTcO2yBh1fZ5aP1UIulifT9Ab?usp=drive_link",
                11: "https://drive.google.com/drive/folders/1WYA_iVa92pbH18PyflhQvEH6f14Iu0LA?usp=drive_link",
                12: "https://drive.google.com/drive/folders/1Q5hvemrpXsuBPada70M3bjvRMj32p7Vn?usp=drive_link",
                13: "https://drive.google.com/drive/folders/1ydoG_y7xjf3LBxzb5Bh295D0oE2JgcBF?usp=drive_link",
                14: "https://drive.google.com/drive/folders/1w22IgHaVgNGcVGenHNIQc-U-0nv3iDsM?usp=drive_link",
                15: "https://drive.google.com/drive/folders/1BFFS0EZGz065pL-lukYtgvHsnFZ7Ov32?usp=drive_link",
                16: "https://drive.google.com/drive/folders/1LvihVUxaYKb0eUgh-WWWByFtYUW5KM28?usp=drive_link",
                17: "https://drive.google.com/drive/folders/1QlTMKqBX1olkc7C0VOiYlxCnM4301Qhw?usp=drive_link"
            }
        },
        "tomo-ii": {
            2025: {
                1: "https://drive.google.com/drive/folders/195PaQmuHj5UkCBaMskUufDoDFUEWtyZl?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1nZ02FoQ5ruyrA1kXEfEXZ_pIJJbh2mIm?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1pktChMR1q9xk8GiS8jtwfSKGBqOZacwa?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1OUnm3iQP9OOwt0NZEJcq7SzZvCIjkoQX?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1DncNbPdGhsOyjBHtiRPW8UdGlUaGlmd9?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1nc4Frn6ahgsNy6u_q_sSQht-XgSzoSE7?usp=drive_link",
                7: "https://drive.google.com/drive/folders/18nU-ENBEvnzoqzOGVbyRuPTpe0H9uxZW?usp=drive_link",
                8: "https://drive.google.com/drive/folders/1kS6zbjR6n30W7iNk4BTE1OQGjDu8nv9G?usp=drive_link",
                9: "https://drive.google.com/drive/folders/1zip6TFH_Wl4RJlBu3Z5v9VRsKK3lvFmW?usp=drive_link",
                10: "https://drive.google.com/drive/folders/1nFWwxP80a29kHbEGk9QzA2ttV4q_GIef?usp=drive_link",
                11: "https://drive.google.com/drive/folders/1NEjKwbasqUxFNO6sSaNMaP3yiqn4r-7M?usp=drive_link",
                12: "https://drive.google.com/drive/folders/1lzS4t3XS2_QdtiekhJ4bzu0aZhBK8xXh?usp=drive_link",
                13: "https://drive.google.com/drive/folders/1v-gz3hBaLQzmYk4bKc_3hdPro4K2DzJQ?usp=drive_link",
                14: "https://drive.google.com/drive/folders/11TFOM11E33qcHqBPUdSPuLkFagZU4bsi?usp=drive_link",
                15: "https://drive.google.com/drive/folders/1z0m21rK_G6q51flIeotMFm2Iij5c-pLm?usp=drive_link",
                16: "https://drive.google.com/drive/folders/1vG3gByf0pwsshuoTQaVCkrL5162aOkoC?usp=drive_link",
                17: "https://drive.google.com/drive/folders/1Vr8OuDl--xyEkTvzViNGDIlaAYJQnyq8?usp=drive_link"
            },
            2026: {
                1: "https://drive.google.com/drive/folders/1rI3zZBv1EL1b1qPFtT1LaX8sUQLaCbU3?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1zkMb72SYh37NPR6FcJs_l2KnYExid-ks?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1FLuX1APPpCpwuVUbndQ-21bDymH8K-48?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1IpyK35VGeHj7nnG2_ZJPqZfZ_UJPVKeG?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1FEEDLSWYfEVa5GO2aAkm4CqcrX83gi8_?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1WQ_auV3hPK-tqek579XhDorKYwZnQqG9?usp=drive_link",
                7: "https://drive.google.com/drive/folders/16ogF2Dml0AMSIE60892uMGclxHrJNV_5?usp=drive_link",
                8: "https://drive.google.com/drive/folders/1bGowyArAOGrZ2QGGooL6AlCAiU7ycd3G?usp=drive_link",
                9: "https://drive.google.com/drive/folders/12dq_uHVhTgpRKRLyclmX3a3zxIpEUUMC?usp=drive_link",
                10: "https://drive.google.com/drive/folders/1lnf5QQOc3saJCdgem7odg_Yvk3v4ujfh?usp=drive_link",
                11: "https://drive.google.com/drive/folders/1pl3uBE_ng6k4TUfAs2q8mzgmf4spCPVc?usp=drive_link",
                12: "https://drive.google.com/drive/folders/1Ql2lYpAmtqAaZpK-Qbz3C1QkduzlbJJK?usp=drive_link",
                13: "https://drive.google.com/drive/folders/1yJnbQxDkgTV8eXzsdX90PiDhEktpm2Ea?usp=drive_link",
                14: "https://drive.google.com/drive/folders/1Ejg1NI7rNWcSJCqWAp2YEwLXWf1e2dCf?usp=drive_link",
                15: "https://drive.google.com/drive/folders/1dZDwhsa1-B8nuiej6DpGyjpu3oXtBu5M?usp=drive_link",
                16: "https://drive.google.com/drive/folders/1bOpIs14JVLIN2zQGe58JoHl1UpO8SuYa?usp=drive_link",
                17: "https://drive.google.com/drive/folders/1XC-_UIWa-wWCoW-8RchLrogi-iKk2Fc3?usp=drive_link"
            }
        },
        "tomo-iii": {
            2025: {
                1: "https://drive.google.com/drive/folders/1YCZK4cFByKRtDv82-WSPChXG51LoQcfU?usp=drive_link",
                2: "https://drive.google.com/drive/folders/190xW3sSJVWM-VdvIbduadlPRryER-gSe?usp=drive_link",
                3: "https://drive.google.com/drive/folders/13jrW0PWkb6y4JHfvjoTyMbosVEkI0mDh?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1AIYvE8tiihl2yJYwWxVnvRV6ZsYYCTUK?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1wEke6ZN6XlovK12d_Nz-9aq97YxQuVeo?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1PrC4L3XR4GAw06Q6B9PS3wMlECJO_2Va?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1pSRlWGiUuaFwXzZbtd2gi9EbNak11YEZ?usp=drive_link",
                8: "https://drive.google.com/drive/folders/1A_j4DZak9KOiSZvQNNEZ-wHMl-rKkC5-?usp=drive_link",
                9: "https://drive.google.com/drive/folders/1SuaKEZli99FLeUamF4Qj63LU2_8cFasm?usp=drive_link",
                10: "https://drive.google.com/drive/folders/180UgGHo4eQVfvm5R4RkOWaEkcg4s0zOm?usp=drive_link",
                11: "https://drive.google.com/drive/folders/1o_3__9oOWDBUWvARW64fJ5zsf1ap3yFQ?usp=drive_link",
                12: "https://drive.google.com/drive/folders/10Ou3MeP_1fGUkTWvfZtYuqhga1KT9v4X?usp=drive_link",
                13: "https://drive.google.com/drive/folders/1AvxiSfWIKY8HWhGCoHG3Ya2fShfwL8Cn?usp=drive_link",
                14: "https://drive.google.com/drive/folders/1ftadb5tXwwst5bAN_KiUUeIBIOnRkaL0?usp=drive_link",
                15: "https://drive.google.com/drive/folders/1Dl9D7RuarAnxiQf7WluyoRNyDUHMpPOL?usp=drive_link",
                16: "https://drive.google.com/drive/folders/1WsjiJWtKQJBfLQqvLxt_u-g_DOGFN9WD?usp=drive_link",
                17: "https://drive.google.com/drive/folders/1OXVQHlnu0pDG8X0IrIGFO8Gnr5hFtXJA?usp=drive_link"
            },
            2026: {
                1: "https://drive.google.com/drive/folders/14lsJlR5XPk-PekOSw8Cq4oakp84CSM50?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1Sf2MAeRrVt_TrrLGMuX7TX7fkvPTDIal?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1UVA9SSsrSby3u6dOKfqw3K1Z3yB3Bg45?usp=drive_link",
                4: "https://drive.google.com/drive/folders/18veHGzRWJnFQ18tOZ23nb7zs9_B1be15?usp=drive_link",
                5: "https://drive.google.com/drive/folders/10mWrezTUj-znmOXhLLxtxgryOZnc4Mem?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1jAGcZGjWnsVqumXI5VSphf9FczBkodHS?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1RFhFd-eJaJzkPvI_Y93KD1gFXOHiLebN?usp=drive_link",
                8: "https://drive.google.com/drive/folders/1eVj9aWaQI0OvoZN1ipJMcW4atU94WNxg?usp=drive_link",
                9: "https://drive.google.com/drive/folders/1fMCaJzNb_u8vEUm6S4QwAtGYcGf_ZGjO?usp=drive_link",
                10: "https://drive.google.com/drive/folders/1UUyhcVx4Zrm5ypFv3QAnb0TyhGQjeolX?usp=drive_link",
                11: "https://drive.google.com/drive/folders/1SrMaTC5Sr87TCWXVovnRbjgq0BrMX6-t?usp=drive_link",
                12: "https://drive.google.com/drive/folders/1smADu1uNzYPHPxuE-ToW5QiTJsYOLauI?usp=drive_link",
                13: "https://drive.google.com/drive/folders/1MRnAGCLvodL2V1xJvDUSYh4VUX_jaj8s?usp=drive_link",
                14: "https://drive.google.com/drive/folders/139ikdGcjEixOC85cHHqYrkpwZZCLIpSD?usp=drive_link",
                15: "https://drive.google.com/drive/folders/178UFcNW8514d0dVJWyHKI8tEvfOPmt39?usp=drive_link",
                16: "https://drive.google.com/drive/folders/1Iw-pLb5MWcTlzGOasPj3UHDCY75u52J8?usp=drive_link",
                17: "https://drive.google.com/drive/folders/10ZkuEbf5M27p4QIY5dShGxpCT1n-yC8B?usp=drive_link"
            }
        },
        "tomo-iv": {
            2025: {
                1: "https://drive.google.com/drive/folders/1ll7XkHBq1mBlS-r7DrPWT7IYRLhIGB66?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1H6W7AKNB5T2SKuG-s4nESrTbjWzem7hS?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1OiNAZUUUblIwiFbP0KSrzzs5C0BT3EFR?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1-4FobTBBQuruG2qnsAFiG8hM4BdPXHKm?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1zA5jUO-BeMw19imSAV7SEeuLYCvm8Ets?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1VdzO7PQVudpLelsQDoiQIScyz2jA9KIP?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1pJh6TfoXzJ56RvBx6e9_QOA5F0vTUnrx?usp=drive_link",
                8: "https://drive.google.com/drive/folders/1eMKwbGnSMRMUUmNMJieFNNzdelcpWXn3?usp=drive_link",
                9: "https://drive.google.com/drive/folders/1V_pmFl8YIwPqUz0mh_diFPsuW6bN5Yc5?usp=drive_link",
                10: "https://drive.google.com/drive/folders/1h9fh_mW2NY2ZH93iH6onBFMOL1LqXK9I?usp=drive_link",
                11: "https://drive.google.com/drive/folders/1BGBQB0ambGQ_roZqMTecPLSemAfQdepZ?usp=drive_link",
                12: "https://drive.google.com/drive/folders/1mVcTLbnaRP-TBDElTLHmXE1vhddKZkqV?usp=drive_link",
                13: "https://drive.google.com/drive/folders/1HP1Tdwd1uAfAdSgPmUQz-ZglBFEOQ31B?usp=drive_link",
                14: "https://drive.google.com/drive/folders/1OS8I4wXhtFXg6vz5otv8bJdB22LHBLWI?usp=drive_link",
                15: "https://drive.google.com/drive/folders/19a_e0wNOrMSdHS15wCYL--iIT3nUX2u0?usp=drive_link",
                16: "https://drive.google.com/drive/folders/12rnVcAexf58bqd2HNtwpbNwuoyZmz1h0?usp=drive_link",
                17: "https://drive.google.com/drive/folders/1-wtgJD_rUJSpSFnKAF0ySEoFA8l1G1nJ?usp=drive_link"
            },
            2026: {
                1: "https://drive.google.com/drive/folders/14spPNOsIMu0iK0XrXJTBqIbzQH6JFMUY?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1_sq24plzXJBBzp2qjmkskpqCbCise09m?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1g1wWckAZ2JRA3YeJtexTCtHD9OLrrUfK?usp=drive_link",
                4: "https://drive.google.com/drive/folders/163I-rK_UGtyuVM-wHH7_IJAIH52Q-wCO?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1wsYH8fYVQdQYC8QI7T92LOVFPazJzMqr?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1GApcRRLwdnk-F-MKjzVBlT-5ULR19L_T?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1sREcoBDpuXps8p5ulexkHyIDXS1_TNis?usp=drive_link",
                8: "https://drive.google.com/drive/folders/15G0FzYdAXHvp7BtVAIZrLtnlDTbU6cY4?usp=drive_link",
                9: "https://drive.google.com/drive/folders/16a7G8dG9E5Ij4X4D_ns-FeAMVJRjqapp?usp=drive_link",
                10: "https://drive.google.com/drive/folders/1d4dv7VTy9mVAgo0rrlYh9pAD9BTDYRNi?usp=drive_link",
                11: "https://drive.google.com/drive/folders/1hksrSyuddobzSHwZmgPImnBLPf7RbIwG?usp=drive_link",
                12: "https://drive.google.com/drive/folders/1vnfmEdgQxRfdPTO3GlFahc56VUDsNgiv?usp=drive_link",
                13: "https://drive.google.com/drive/folders/1nQuup6YaU7xjvwtbeBZVhH2C7yw0BZJS?usp=drive_link",
                14: "https://drive.google.com/drive/folders/13UD7KPoOmx2rsBmBlom5WmpZ8fW_5G8Q?usp=drive_link",
                15: "https://drive.google.com/drive/folders/1TvbkP-sXSIMBrAi0My9v_4n4nBpmKx0l?usp=drive_link",
                16: "https://drive.google.com/drive/folders/1tHGwBJY0ENWPMkU6OLdZxzD9R3pFnbXQ?usp=drive_link",
                17: "https://drive.google.com/drive/folders/1e7NXIs0nMwWWSTB0Eb7_SdutrqxFiTs6?usp=drive_link"
            }
        },
        "tomo-v": {
            2025: {
                1: "https://drive.google.com/drive/folders/1T5CiCUGkv_6QJ2uAmkN9SKfGUxnnp4oS?usp=drive_link",
                2: "https://drive.google.com/drive/folders/15SW4C7yu5pmEJdy2TCbuWoWKoSFDq018?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1gRFAY2SwWMRbNSIDf1X6EpwFwst71Ghj?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1RQkhe8OyHamWHbBt0wYc37YQQYBiSbUU?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1oTbAJjtx2iXS8uzz1dksM7UJf2Ir3ujS?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1q_n0XqP12p7XlqdJNqD9Qjg-MJIOtokN?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1LdDcHEsllwsJ8-HO61lxQfMkQYa0pj3c?usp=drive_link",
                8: "https://drive.google.com/drive/folders/16RHxtu6X2CxELNf-VzkroDMKA-SvLnZ8?usp=drive_link",
                9: "https://drive.google.com/drive/folders/1TytTW3r9bTAG75bcBGJiZWj-Y_COcRsW?usp=drive_link",
                10: "https://drive.google.com/drive/folders/1RWrVNA6f7ePLmn82tQYByzaIMjnlQ9vV?usp=drive_link",
                11: "https://drive.google.com/drive/folders/18qmD0wF2-W-iVT3HCUU7eV6OGJN2Szwj?usp=drive_link",
                12: "https://drive.google.com/drive/folders/10hDIVB6LiJd3JTlgDXPApkRSD0EwJ38s?usp=drive_link",
                13: "https://drive.google.com/drive/folders/1Du7Q81uZoie_x7mkyE8pfzR33Xwix9vg?usp=drive_link",
                14: "https://drive.google.com/drive/folders/18rs6DMPostzXpea5G_dBRSNb4Mlgi-L2?usp=drive_link",
                15: "https://drive.google.com/drive/folders/1SAXgWCTBzYwRe_ifom5dGh51laZjgn-L?usp=drive_link",
                16: "https://drive.google.com/drive/folders/17txA-ZH9-XyGpYTprwRIh2RHuoErdJR3?usp=drive_link",
                17: "https://drive.google.com/drive/folders/1116wVYZ7MGfosP6ZwKbw0K1lrPjYQ7mG?usp=drive_link"
            },
            2026: {
                1: "https://drive.google.com/drive/folders/1NtNjWOkRuXXXysyriAO3oEoQnE49XYwk?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1f7cWVR7KdDESCzfwB7mZhtRMk-yiveMw?usp=drive_link",
                3: "https://drive.google.com/drive/folders/16H8fgxr5SfJxRB3Z0X7GRncglC77m8hv?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1owlj2mHfset6afx2ZtASjVlilpGwCXfa?usp=drive_link",
                5: "https://drive.google.com/drive/folders/17cRWxpJAg2_8A0FcpEAwl7OMvnjkhnYs?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1P9bcfjuhzxVTqRmHO-eBw3mGNLkBk9tT?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1xZhQy6M-7zAxFiosII2vMDq1C6GXyhi1?usp=drive_link",
                8: "https://drive.google.com/drive/folders/17F9wJW_qb5w_IGFe9ovXWuX_RfBl6LA3?usp=drive_link",
                9: "https://drive.google.com/drive/folders/1oNwlI1WlJ-o-FKMwiAELeJECgf62eUzs?usp=drive_link",
                10: "https://drive.google.com/drive/folders/1WFc9La5F9GJfoF4rj3dn4nzuxf-8wr2v?usp=drive_link",
                11: "https://drive.google.com/drive/folders/1mnRyNOIQivnC1esWpWsmJlc5o05j-Mjb?usp=drive_link",
                12: "https://drive.google.com/drive/folders/1ANpqXO7vADx_711y6d9VslXuysBVg69v?usp=drive_link",
                13: "https://drive.google.com/drive/folders/1gl-AShMSZ0wjng2NaPKxo2Yl-6VcLXBP?usp=drive_link",
                14: "https://drive.google.com/drive/folders/1--vpWhqc99DMlm3411dg3o7o2VcPLz6H?usp=drive_link",
                15: "https://drive.google.com/drive/folders/1tf2htjA0RVzmFHIftdFTOwqZcR4zsMsu?usp=drive_link",
                16: "https://drive.google.com/drive/folders/1KVveevmrEJ0Q_vj5AhfHFMduV4OofVWS?usp=drive_link",
                17: "https://drive.google.com/drive/folders/1YSXZWakSXdiA0YRisaLnRVNodWuO5mFo?usp=drive_link"
            }
        },
        "tomo-vi": {
            2025: {
                1: "https://drive.google.com/drive/folders/1u3GiIwBRVVkCJdlHlFQ1RIdswbRF68tC?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1zRp2-Nt37_aUxf1srAwr5FZjiJxolBSf?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1ghwTod8DfTgnKRxl3b_Ygnf62YfFvwg7?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1NSqXIkdhBbe5BWkrywpUh-FK1nZleu51?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1Rqe_zVD1kLNqawoAfhiSVuCjFOiW8MYP?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1fQD1GwRnNKylbl7W9K8sBm2xk2MxPGMh?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1y37lq7BH7RX0fGZ9xyOo7d1CsRsSgORu?usp=drive_link",
                8: "https://drive.google.com/drive/folders/1bhM2_iwYzpvj24kTRUBdHmJvwAusHedo?usp=drive_link",
                9: "https://drive.google.com/drive/folders/1Kslve-BtkeHzUAJ5L37cOOGYEOPaSPJ1?usp=drive_link",
                10: "https://drive.google.com/drive/folders/1YNMK9cMWOElcbi6NXDnk-XP8_mJRVTLv?usp=drive_link",
                11: "https://drive.google.com/drive/folders/1x7493LGUb2MJNm0v5xgJcAxy1nSCUnS2?usp=drive_link",
                12: "https://drive.google.com/drive/folders/1Ld6Kmg6GIGoSFq-F44_APV-N4v1vTUAv?usp=drive_link",
                13: "https://drive.google.com/drive/folders/1kkq7v0LXR2TRGwuE5_bhbEdOLM4oXeYr?usp=drive_link",
                14: "https://drive.google.com/drive/folders/1ORB4NmPl_cRIhZS96H69CZPhTNPgZdtz?usp=drive_link",
                15: "https://drive.google.com/drive/folders/1SnC1yBcL6h7b2nMnPYMwBlAVcH5fHH_-?usp=drive_link",
                16: "https://drive.google.com/drive/folders/1AknXAo0RQBzhYUbBQYWmpufaz-32Kj-2?usp=drive_link",
                17: "https://drive.google.com/drive/folders/16Fdw9rYfGSewgQVnGfx60wpzSyjBdeWw?usp=drive_link"
            },
            2026: {
                1: "https://drive.google.com/drive/folders/1kN7vmU2W1jfSy1ULvYNfcGaP8zz4T0Gg?usp=drive_link",
                2: "https://drive.google.com/drive/folders/12WmTtFtMpfbNyRsd2FnzfKty2VnvKFSx?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1rZYcki5TuNVNLjwrSpAsA9ZbmmArusoE?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1fk7NDlyGOKNXMGDlH7lpEzUxaeZ0TU9R?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1C76yVndSqDvHCaVZewUFMRuB6Bff8px2?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1RwIfe6TVURlQVT2UFCzsSWo-NkyWvOF4?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1zfLeMgcGr9sZ1npcKkxKFBKbb3CDECSU?usp=drive_link",
                8: "https://drive.google.com/drive/folders/1rS_KWHX0MzbCJhqXWpIX02C3EVnLV9Oj?usp=drive_link",
                9: "https://drive.google.com/drive/folders/1cmDmImWxyyGC9aohnkj4QyZ_1pz52yom?usp=drive_link",
                10: "https://drive.google.com/drive/folders/1iK3ha5vMV8ydTPFWrk0EWZDwHxl0hywD?usp=drive_link",
                11: "https://drive.google.com/drive/folders/1nqlXNEvjZ5DYzv8MkvGcIPmUVXVtQiXh?usp=drive_link",
                12: "https://drive.google.com/drive/folders/10JE-v2xFOp-TRmJrNEtzNzXcpad0i79z?usp=drive_link",
                13: "https://drive.google.com/drive/folders/1ytTQXU1yy29cKGATBNfGfC1I4e1aDdcL?usp=drive_link",
                14: "https://drive.google.com/drive/folders/1uO5fSFzbVn4A7FAo2BLOt02bmwEBHwFy?usp=drive_link",
                15: "https://drive.google.com/drive/folders/1gK5HonzMkUTtlChQEKtLTDE5Q8LLtzoP?usp=drive_link",
                16: "https://drive.google.com/drive/folders/1CcYbtLShI9hhajzVpt5JtldmRM1PRDw8?usp=drive_link",
                17: "https://drive.google.com/drive/folders/1KH1PBpYd53vlSO_GuIhkrFaot_nUAjZz?usp=drive_link"
            }
        },
        "intensivo-i": {
            2025: {
                1: "https://drive.google.com/drive/folders/1gXxm_IT76Xr_wifLu-qCDRyk4fTBmwkO?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1UYFtU_cmi7bDgf8fTdCIdcNKBOeXxHbX?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1vKnuBKQ0lg5hyU28VBcvRvWA_GDNXJn_?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1kcjkMvXjAcmi_Ix4UPbGWTBDDfgZ9q4T?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1-1rAwHyiHjQyrobt8t71CIXPhZRO2H_6?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1HeE575g8XUxk9lX6Vs0u9NOq9sE7c56I?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1R_Ivgga_y_a2sDf3GftPWoXpm-o66P3U?usp=drive_link",
                8: "https://drive.google.com/drive/folders/1oVxAh_pN2zPszAne2118AWLoAzfQz2-U?usp=drive_link",
                9: "https://drive.google.com/drive/folders/1lLnz1YNDVy9o5zNCqAsdo7G7AiJ5Cg4Y?usp=drive_link",
                10: "https://drive.google.com/drive/folders/1DwD2TxyFjazjez2SIUHUdp9QenmjylCT?usp=drive_link",
                11: "https://drive.google.com/drive/folders/1plwcEpFjAJCbEiSs9kF1YHhsrLFGZXws?usp=drive_link",
                12: "https://drive.google.com/drive/folders/1FXjl_hmocC0ya5nAgwX-yvZ71IQd8hm1?usp=drive_link",
                13: "https://drive.google.com/drive/folders/10THox_ymdGtVNeSua6mpz_DG_fdcrar0?usp=drive_link",
                14: "https://drive.google.com/drive/folders/1RC9XTnUwKzDPRldjEhmhqBs6k1Yw_4hx?usp=drive_link",
                15: "https://drive.google.com/drive/folders/1wqGzYySS8Kye4V7rexEteBxWXMkkcpuq?usp=drive_link",
                16: "https://drive.google.com/drive/folders/1OMN9RblvrdlyFGcXd5J1Bk6xsR_m_Pzg?usp=drive_link",
                17: "https://drive.google.com/drive/folders/1m41CWoE2ZP5jgD_-yuCf1W3XGCu-ZSZD?usp=drive_link"
            },
            2026: {
                1: "https://drive.google.com/drive/folders/1V0sbSWcBPOt7zubF7PgPmjnTFX2xwoP5?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1chYn5eiaDIvbw0-bBi_GkYISvHfiITrB?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1rP03sXIka-UKZ8mt98WmWST_LY5T7-ua?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1vdNJ_Pm6Qxufgp7nL92VUIt-nFqoYsr_?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1tneEWnuX89zLQN1iV0K28j35clSbREqm?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1Q97JYbIuKRBZscMVAQzDZfQ97TDWQns2?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1wTPnPYVXLy1FFK7QmU3RD8jV3DOptPBS?usp=drive_link",
                8: "https://drive.google.com/drive/folders/1cC_H4bxDN2XA6bVacZyr8GlYcIqcSafC?usp=drive_link",
                9: "https://drive.google.com/drive/folders/1s-kKX8iAdwVJ36Jja0x5B3ZJBSHbzUsb?usp=drive_link",
                10: "https://drive.google.com/drive/folders/1inxEyGNJnK_uWGIf5VE0pLUFaauHw60g?usp=drive_link",
                11: "https://drive.google.com/drive/folders/12SaF0MxNKWYSrTAdonUsX5a2sQ8QAFCD?usp=drive_link",
                12: "https://drive.google.com/drive/folders/1O-L_qAXEUH5UMurGxLpjOYYFOGj3t9fJ?usp=drive_link",
                13: "https://drive.google.com/drive/folders/1SnZM1FvghhgAusu6rl1nkHgpo7P49kKA?usp=drive_link",
                14: "https://drive.google.com/drive/folders/1x7bidsRbjp-WfSfWX_7D9H3QGKPuIbr0?usp=drive_link",
                15: "https://drive.google.com/drive/folders/1YgUHLX2errpOOM0n_3ofnoAJQDIxT0JU?usp=drive_link",
                16: "https://drive.google.com/drive/folders/1Z8MZeUtWFLfdx7Uok1mCxCt97BDx48F7?usp=drive_link",
                17: "https://drive.google.com/drive/folders/1P-92i0mFcFae_jkHFK-5Dt7FdWkc9-G_?usp=drive_link"
            }
        },
        "intensivo-ii": {
            2025: {
                1: "https://drive.google.com/drive/folders/1NxLW3JLmpNzjCmAZvqawwa1p9QuH7Kxa?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1VUVYBktq5Nd3fcT6KELRz012ffAIurAW?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1wy2bWgwU-h-jj0pZeZcn-tCHR21s-AAh?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1r13JEJDS0lBywtr30PpABneMM053I43W?usp=drive_link",
                5: "https://drive.google.com/drive/folders/15h47JeAo9T98C8MFqc4BuqF-2mQ4Mzxp?usp=drive_link",
                6: "https://drive.google.com/drive/folders/16TNwzbnIgwOYaloUrm6Y6uUm6Mn5HCZm?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1QHEx-xs1ce0diYSOTe-CKizJJ1yjkZ0y?usp=drive_link",
                8: "https://drive.google.com/drive/folders/1z_aPBPafMLwFdSnWPgrbJavD7LzVWy0Z?usp=drive_link",
                9: "https://drive.google.com/drive/folders/1Db0nr7TGxZ6FqE2A06ysQOo4wkE7uFPn?usp=drive_link",
                10: "https://drive.google.com/drive/folders/11_gyJXBJ7lx9-PGthuIwCZlCzycB_tI7?usp=drive_link",
                11: "https://drive.google.com/drive/folders/1ULm-wpE-N9PEYQ1mvRxIp_vUm5BypyON?usp=drive_link",
                12: "https://drive.google.com/drive/folders/1JJ_NeoEhwDh4gKv2ShjxjCOil7qIorEF?usp=drive_link",
                13: "https://drive.google.com/drive/folders/1miarKVdSvaWAxpHN-uwHqBpcygYsXE2o?usp=drive_link",
                14: "https://drive.google.com/drive/folders/1bX3StU0T7DdpRNvyW7PxHWiKSGTG2Fv0?usp=drive_link",
                15: "https://drive.google.com/drive/folders/1L_G-kruYsp3YTlQy4TzV5CySUw1FHIZv?usp=drive_link",
                16: "https://drive.google.com/drive/folders/1_sZyjOXuGydbE4b-ue0F_iasWzHv_y04?usp=drive_link",
                17: "https://drive.google.com/drive/folders/1BgmzvgNUysa3kvzMAs4RFx0qrD6D4ii6?usp=drive_link"
            },
            2026: {
                1: "https://drive.google.com/drive/folders/151VTDzl7TRBbA7zAfQ62I_kXACL1C_Uj?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1FcKhFJxV1Lv71WdveGtVVn3fkiFAKgG5?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1HKfllCLoTOABRCG-E6ZdAXgZkAlDDhsj?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1xhzJgrmpgH4CT6bF9ZG84J-w_yJiPB0z?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1xVIay1DM_-_BMmFV_nnPkH8_Xx4yF7le?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1VkK2QVXKijjlhcMnUlg7gabbn8-_oxuE?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1HNPJaqvbvIN9OeLx8ns1zUu7OAuaAoWF?usp=drive_link",
                8: "https://drive.google.com/drive/folders/19v5QUz9RjIIdE8kxJGsMhm9QWEx-655K?usp=drive_link",
                9: "https://drive.google.com/drive/folders/1f5qngOi3tbaRgI6TAKx1WgvHTfAl5VKW?usp=drive_link",
                10: "https://drive.google.com/drive/folders/1HhxwsAGiA2aAKAC9XVJgq2G78Y5Ivjo-?usp=drive_link",
                11: "https://drive.google.com/drive/folders/1jK3LSmEFC2Qyp6NDw15iH4GfGmjD84JK?usp=drive_link",
                12: "https://drive.google.com/drive/folders/1VpiqhK7a4fsM9-kD-a2Mu_1ZCQlpBi0D?usp=drive_link",
                13: "https://drive.google.com/drive/folders/1d40w_nHpWchuCSiehH_0zAmBBe8dWstE?usp=drive_link",
                14: "https://drive.google.com/drive/folders/1QCulE2BGvYHLx7nAIDil8QTUerAgnqZ4?usp=drive_link",
                15: "https://drive.google.com/drive/folders/1Y-cOmA7d5yBgkoGZS6u9znqMOYl62ndT?usp=drive_link",
                16: "https://drive.google.com/drive/folders/1BRvjedwmcS5VMpOxgNXP_6OyBxhwLD71?usp=drive_link",
                17: "https://drive.google.com/drive/folders/1y2jamOZHgf2KfixAiOwJlkyE910JoXmI?usp=drive_link"
            }
        },
        "intensivo-iii": {
            2025: {
                1: "https://drive.google.com/drive/folders/14v7xY8KwRcxOTixocr8v-eMv07XCToRY?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1bx5ZxGUnGWb7yyYoN_g3Pk1u3z5g52eM?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1Sja-rkuMWNWwKKs8XMUSf_sPh-Lg27B3?usp=drive_link",
                4: "https://drive.google.com/drive/folders/18vNnfvi1Udq8GNtuk5V2QUd719L4CGV2?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1E4LckNMlP1p-VnZOsPIa_mxgV_z4DkOz?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1Hg0WOGp1IvROp3ZF68BR3A_bhG2la1tc?usp=drive_link",
                7: "https://drive.google.com/drive/folders/15I33KxLaAn13xiArTcHif21MVaReBHyU?usp=drive_link",
                8: "https://drive.google.com/drive/folders/1zG4YZz06sx8G91taG9k_rgg4aeERd6QY?usp=drive_link",
                9: "https://drive.google.com/drive/folders/1voOcjvensDglyGcZ-v45M278ElgQOvcQ?usp=drive_link",
                10: "https://drive.google.com/drive/folders/1CMtIZFSEmy9hxhO9eZwfy6UhNaB-00hF?usp=drive_link",
                11: "https://drive.google.com/drive/folders/1v-oJeVEIxpz2SzQg8xb9N8cj7dMMQcK-?usp=drive_link5",
                12: "https://drive.google.com/drive/folders/1KHdHUSd0Al4rM61a2pD9Uzz93VWyxhY5?usp=drive_link",
                13: "https://drive.google.com/drive/folders/1OKnnIDtJjr_ZcKUbdCMcIjA0UnfB2s-2?usp=drive_link",
                14: "https://drive.google.com/drive/folders/1LkRNYKkNwTvVKdT1wwv4Ca2lVCcuMTKd?usp=drive_link",
                15: "https://drive.google.com/drive/folders/1h3mbQK_ukuzEIv2QcEelihgr6CqkmcRI?usp=drive_link",
                16: "https://drive.google.com/drive/folders/1sQNpfQEJeXY-kugoFY0c2ln_k8xlMsji?usp=drive_link",
                17: "https://drive.google.com/drive/folders/1H2_kFdVDSNCylcB9RJ6NhudILG70aA_z?usp=drive_link"
            },
            2026: {
                1: "https://drive.google.com/drive/folders/1HSnPlfHFDASbyy25FPsjH5vDuUsrcUiJ?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1GrmJhxrosiX87GItXIO2XfqpRHu7eFva?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1_DjxOGqOBpp7Pk39nYsCIV4PORZwhKw4?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1JNxJenFde-OFRVbA4jFjEvxBRYWwIiIw?usp=drive_link",
                5: "https://drive.google.com/drive/folders/18-0GREm4g0DnWOX4_3Nopp0ZOckhOyNS?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1DuFidfRZVhsxE330CgzC-axLIWLnae2Z?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1m9UvH2bdQLnU7Q_q-ZlIzDkJPM7Zsp2J?usp=drive_link",
                8: "https://drive.google.com/drive/folders/1eQTsjnKXAZiAeMNnsaK57aKwHyxjFuf9?usp=drive_link",
                9: "https://drive.google.com/drive/folders/1Ef6lMogrjkk24ld91Jo4gUtrM4PihJRq?usp=drive_link",
                10: "https://drive.google.com/drive/folders/1mgE86YpEHxZDSjnjyw39rQqBztUURfJL?usp=drive_link",
                11: "https://drive.google.com/drive/folders/1WynJe6c2-F-QmZqxXaH2BV_7e-nrY3DJ?usp=drive_link",
                12: "https://drive.google.com/drive/folders/11BOSPz7d0OUTwG_TFfilqAODS48SPZfm?usp=drive_link",
                13: "https://drive.google.com/drive/folders/1N_NYjdjds2n1RmaMQMv0E0v-sTJMw38t?usp=drive_link",
                14: "https://drive.google.com/drive/folders/1c6uwWZFgWsaOTHbOSUv85LybFyGLc-OF?usp=drive_link",
                15: "https://drive.google.com/drive/folders/16dbbA46HD7yHi_DnF1UQgXsoxX62DS35?usp=drive_link",
                16: "https://drive.google.com/drive/folders/1KM4uLxe9H6U5PZ_gn6JLT1_29IUzt8cR?usp=drive_link",
                17: "https://drive.google.com/drive/folders/14K2FmIE6RmCZI2aeS6afFXDkFC0FJIt6?usp=drive_link"
            }
        }
    }
};

// Variables globales
let currentYear = 2025;
let currentSelector = "tomo-i";
let currentSelectorType = "tomo";

// Función para generar los botones de selectores
function generateSelectorButtons() {
    const tomoContainer = document.getElementById('tomo-buttons');
    const intensivoContainer = document.getElementById('intensivo-buttons');
    
    // Limpiar contenedores
    tomoContainer.innerHTML = '';
    intensivoContainer.innerHTML = '';
    
    // Generar botones de Tomos
    coursesData.selectors.tomos.forEach(tomo => {
        const button = document.createElement('button');
        button.className = `selector-btn tomo-btn ${tomo.id === currentSelector ? 'active' : ''}`;
        button.dataset.id = tomo.id;
        button.dataset.type = "tomo";
        button.innerHTML = `
            <i class="${tomo.icon}"></i>
            <span>${tomo.name}</span>
        `;
        tomoContainer.appendChild(button);
    });
    
    // Generar botones de Intensivos
    coursesData.selectors.intensivos.forEach(intensivo => {
        const button = document.createElement('button');
        button.className = `selector-btn intensivo-btn ${intensivo.id === currentSelector ? 'active' : ''}`;
        button.dataset.id = intensivo.id;
        button.dataset.type = "intensivo";
        button.innerHTML = `
            <i class="${intensivo.icon}"></i>
            <span>${intensivo.name}</span>
        `;
        intensivoContainer.appendChild(button);
    });
}

// Función para actualizar el selector actual
function updateCurrentSelector() {
    const selectorElement = document.getElementById('current-selector');
    let selectorName = "";
    
    // Encontrar el nombre del selector actual
    if (currentSelectorType === "tomo") {
        const tomo = coursesData.selectors.tomos.find(t => t.id === currentSelector);
        selectorName = tomo ? tomo.name : "Tomo I";
    } else {
        const intensivo = coursesData.selectors.intensivos.find(i => i.id === currentSelector);
        selectorName = intensivo ? intensivo.name : "Intensivo I";
    }
    
    selectorElement.innerHTML = `
        <i class="${currentSelectorType === 'tomo' ? 'fas fa-book' : 'fas fa-bolt'}"></i>
        <span>${selectorName} - Año ${currentYear}</span>
    `;
}

// Función para generar las tarjetas de cursos
function generateCourseCards() {
    const container = document.getElementById('courses-container');
    container.innerHTML = '';
    
    // Actualizar contador de cursos
    document.getElementById('courses-count').textContent = coursesData.courses.length;
    
    // Obtener los enlaces para el selector y año actual
    const driveLinksForSelector = coursesData.driveLinks[currentSelector];
    const driveLinksForYear = driveLinksForSelector ? driveLinksForSelector[currentYear] : null;
    
    coursesData.courses.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';
        
        // Obtener el enlace para el curso actual
        const driveLink = driveLinksForYear ? driveLinksForYear[course.id] : "#";
        
        // Asignar un color único al icono de cada curso
        const iconStyle = `color: ${course.color}`;
        
        // Determinar el tipo de tag
        const tagClass = currentSelectorType === "intensivo" ? "selector-tag intensivo-tag" : "selector-tag";
        
        card.innerHTML = `
            <div class="${tagClass}">${currentSelector}</div>
            <div class="year-tag">${currentYear}</div>
            <div class="course-logo">
                <i class="${course.icon}" style="${iconStyle}"></i>
            </div>
            <div class="course-content">
                <h3>${course.name}</h3>
                <p>${course.description}</p>
                <a href="${driveLink}" target="_blank" class="drive-link" data-course-id="${course.id}">
                    <i class="fab fa-google-drive"></i> Acceder al Material
                </a>
            </div>
        `;
        
        container.appendChild(card);
    });
    
    // Actualizar el indicador de año
    document.getElementById('current-year').textContent = currentYear;
    
    // Actualizar el selector actual
    updateCurrentSelector();
}

// Función para cambiar de año
function changeYear(year) {
    // Actualizar año actual
    currentYear = year;
    
    // Actualizar pestañas activas
    document.querySelectorAll('.tab').forEach(tab => {
        if (parseInt(tab.dataset.year) === year) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    
    // Regenerar las tarjetas
    generateCourseCards();
}

// Función para cambiar de selector
function changeSelector(selectorId, selectorType) {
    // Actualizar selector actual
    currentSelector = selectorId;
    currentSelectorType = selectorType;
    
    // Actualizar botones activos
    document.querySelectorAll('.selector-btn').forEach(btn => {
        if (btn.dataset.id === selectorId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Regenerar las tarjetas
    generateCourseCards();
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
    // Generar los botones de selectores
    generateSelectorButtons();
    
    // Generar las tarjetas iniciales
    generateCourseCards();
    
    // Configurar eventos para los botones de selectores
    document.querySelectorAll('.selector-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const selectorId = this.dataset.id;
            const selectorType = this.dataset.type;
            changeSelector(selectorId, selectorType);
        });
    });
    
    // Configurar eventos para las pestañas de año
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const year = parseInt(this.dataset.year);
            changeYear(year);
        });
    });
    
    // Agregar efecto de carga inicial
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 100);
});

// Efecto de carga inicial
document.body.style.opacity = 0;
document.body.style.transition = 'opacity 0.5s ease';