<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import Header from "$lib/components/Header.svelte";
    import SeqCard from "$lib/components/SeqCard.svelte";
    import Faq from "$lib/components/faq/Faq.svelte";
    import Wwd from "$lib/components/wwd/Wwd.svelte";
    import LogoIcon from "$lib/components/LogoIcon.svelte";
    import { split } from "$lib/func/contacts";

    let phone:string = "935783857";
    let mail:string = "mail@mail.com"

    const faq: Array<[string, string]> = [
        [
            "Quanto tempo demora a reparação de um estore?",
            "O tempo de reparação de um estore pode variar consideravelmente dependendo da complexidade da avaria e do tipo de estore. Reparações simples, como a substituição de uma fita ou de algumas lamelas, podem ser concluídas em menos de uma hora. Problemas mais complexos, como a reparação ou substituição de um motor de estore elétrico, podem levar mais tempo. Na Doutor House Reparação de Estores, esforçamo-nos sempre por realizar um diagnóstico rápido e uma reparação eficiente, minimizando o tempo de intervenção. Após a avaliação inicial, o nosso técnico poderá dar-lhe uma estimativa mais precisa do tempo necessário.",
        ],
        [
            "Reparam todos os tipos e marcas de estores?",
            "Sim, a nossa equipa técnica tem experiência e formação para reparar uma vasta gama de estores, incluindo estores manuais (de fita, mola ou manivela), estores elétricos (com motor tubular, de fita, etc.), estores térmicos, estores de rolo (interiores e exteriores), estores laminados (verticais e horizontais), e estores de segurança. Trabalhamos com as principais marcas do mercado e também com modelos mais antigos ou menos comuns. O nosso objetivo é encontrar sempre a melhor solução para o seu problema específico.",
        ],
        [
            "A reparação de estores tem garantia?",
            "Sim, todas as nossas reparações de estores têm uma garantia de 1 ano sobre o serviço realizado e as peças substituídas (quando aplicável e fornecidas por nós). Acreditamos na qualidade do nosso trabalho e dos materiais que utilizamos, e queremos que os nossos clientes tenham total tranquilidade ao contratar os nossos serviços.",
        ],
        [
            "Quanto tempo demoram a chegar?",
            "Dependendo da sua localização e da agenda do dia, conseguimos intervir no próprio dia, vamos a caminho assim que recebemos a sua chamada. Damos sempre prioridade a casos urgentes.",
        ],
    ];
</script>

<div class="relative font-roboto cursor-default">
    <Header phone={phone}></Header>
    <main>
        <div class="relative top-0">
            <Hero phone={phone}></Hero>
        </div>

        <!-- explanation -->
        <section class="">
            <div class="base-margin-box">
                <div class="text-center mb-8 md:mb-12">
                    <h3 class="sub-title">Reparação e Montagem De Estores</h3>
                </div>
                <div class="text-center mb-8 md:mb-12">
                    <h5 class="text-xl font-semibold">
                        Os seus estores avariaram? O motor deixou de funcionar? Ou quer substituir por estores novos? Estamos aqui para ajudar
                    </h5>
                </div>
                <div>
                    <p class="text">
                        Não fique preocupado, somos uma empresa líder na reparação e montagem de estores e persianas aos melhores preços.
                        Para uma reparação de estores, interiores e exteriores, rápida e eficiente, ligue já para a nossa empresa. Temos um leque alargado de soluções para os mais variados problemas, quer seja a nível de materiais (PVC, alumínio, lâminas...), abertura (manual ou elétrica) ou acessórios (comandos, interruptores, cordões, calhas, ganchos…). Não se sinta desconfortável na sua própria casa ou no local de trabalho. 
                    </p>
                </div>
            </div>
        </section>

        <!-- servicos -->
        <section class="">
            <Wwd
                title={"O Que Fazemos"}
                description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugiat iste repellat alias blanditiis atque voluptate saepe asperiores? Animi, vel eum. Vel, suscipit hic ipsa ex error soluta temporibus aspernatur."}
            ></Wwd>
        </section>
        
        <!-- steps -->
        <div class="border-neutral-300 border-t">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <SeqCard
                    title="Descreva a situação"
                    desc="Diga-nos o que precisa de ser feito"
                >
                    <div
                        class="bg-action-300 p-2 rounded-full text-neutral-200"
                    >
                        <svg
                            width="32px"
                            height="32px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.85904 6C6.67396 4.14864 9.20308 3 12.0005 3C14.7979 3 17.327 4.14864 19.1419 6M16.4727 9C15.374 7.7725 13.7774 7 12.0004 7C10.2234 7 8.62687 7.7725 7.52823 9M3.39199 16.571C8.17161 11.8351 15.8855 11.8704 20.6215 16.6501C20.7659 16.7958 20.9059 16.9442 21.0414 17.0952C21.3243 17.4105 21.4658 17.5681 21.5288 17.7917C21.5802 17.9738 21.5733 18.2118 21.5113 18.3906C21.4352 18.6101 21.2653 18.7784 20.9255 19.1151L19.7298 20.2999C19.443 20.5841 19.2996 20.7262 19.1299 20.8008C18.98 20.8667 18.8162 20.8948 18.6529 20.8826C18.468 20.8688 18.2855 20.7826 17.9204 20.6102L15.9673 19.6878C15.5425 19.4872 15.3301 19.3869 15.1924 19.2285C15.0709 19.0889 14.9906 18.9183 14.9604 18.7357C14.9261 18.5286 14.9841 18.301 15.1001 17.8458L15.3402 16.9037C13.2037 16.0897 10.8142 16.0772 8.67073 16.8732L8.9022 17.8174C9.01404 18.2737 9.06997 18.5018 9.03377 18.7085C9.00184 18.8908 8.91997 19.0607 8.79725 19.1992C8.65807 19.3563 8.44477 19.4546 8.01817 19.6513L6.05668 20.5558C5.69003 20.7248 5.50669 20.8094 5.32171 20.8215C5.1583 20.8322 4.99477 20.8026 4.84548 20.7353C4.67646 20.6592 4.53437 20.5158 4.25018 20.2289L3.06537 19.0332C2.72866 18.6934 2.56031 18.5235 2.48628 18.3034C2.42596 18.124 2.42117 17.886 2.47422 17.7043C2.53934 17.4813 2.68224 17.325 2.96804 17.0124C3.10495 16.8626 3.24627 16.7154 3.39199 16.571Z"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </SeqCard>
                <SeqCard
                    title="Orçamento"
                    desc="Fazemos um orçamento grátis para a sua obra"
                >
                    <div
                        class="bg-action-300 p-2 rounded-full text-neutral-200"
                    >
                        <svg
                            width="32px"
                            height="32px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.63604 14.1238L7.05026 15.538M8.46447 11.2953L9.87868 12.7096M11.2929 8.46691L12.7071 9.88113M14.1213 5.63849L15.5355 7.0527M2.80762 16.9522L7.05026 21.1948L21.1924 7.0527L16.9498 2.81006L2.80762 16.9522Z"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </SeqCard>
                <SeqCard
                    title="Faça o agendamento"
                    desc="Escolha um hora conveniente"
                >
                    <div
                        class="bg-action-300 p-2 rounded-full text-neutral-200"
                    >
                        <svg
                            width="32px"
                            height="32px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3 9H21M7 3V5M17 3V5M6 13H8M6 17H8M11 13H13M11 17H13M16 13H18M16 17H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </SeqCard>
                <SeqCard
                    title="Realização do servico"
                    desc="Fazemos tudo rápido e eficaz"
                >
                    <div
                        class="bg-action-300 p-2 rounded-full text-neutral-200"
                    >
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            ><path
                                fill="currentColor"
                                fill-rule="evenodd"
                                d="M5.484 2.917c.817.22 1.612.62 2.509 1.403a.75.75 0 01.085 1.044l-.422.51 1.13.855.62-.802a.75.75 0 011.08-.113c.678.576.906 1.133.959 1.642.011.111.013.21.014.283v.044c.204.187.417.369.635.552l1.784-2.098-.712-.584-.1.018-.021.003a3.018 3.018 0 01-.395.051c-.132.006-.456.009-.736-.217a1.173 1.173 0 01-.388-.646c-.039-.16-.054-.33-.063-.436l-.002-.012a8.261 8.261 0 00-.012-.128c-1.814-1.199-3.99-1.864-5.965-1.37zm7.789 2.723h-.002.002zM7.868 7.915l-1.17-.884-3.972 4.804a.25.25 0 00.036.354l.913.73a.25.25 0 00.354-.042l3.84-4.962zM6.433 5a4.169 4.169 0 00-1.352-.638c-.463-.123-.908-.167-1.47-.224a42.642 42.642 0 01-.68-.073.75.75 0 01-.378-1.333c3.21-2.54 7.208-1.427 9.914.432a1.142 1.142 0 01.428.681c.026.112.04.23.05.325a2.32 2.32 0 01.285-.028c.143-.004.46.003.734.227l.148.12c.45.368.773.633 1.31 1.082a.75.75 0 01.09 1.062l-2.757 3.24a.75.75 0 01-1.052.089l-.253-.21a23.8 23.8 0 01-1.146-.994 1.128 1.128 0 01-.34-.779c-.004-.066-.004-.141-.005-.192v-.03a2.37 2.37 0 00-.002-.089l-4.742 6.128a1.75 1.75 0 01-2.477.296l-.913-.73a1.75 1.75 0 01-.255-2.482l4.863-5.88zm6.153-.772a.127.127 0 01.002 0h-.002z"
                                clip-rule="evenodd"
                            /></svg
                        >
                    </div>
                </SeqCard>
            </div>
        </div>
        

        <!-- questions -->
        <section class="relative pb-24 md:pb-[20%]">
            <Faq
                title={"Perguntas Frequentes Sobre Reparação de Estores"}
                text={""}
                questions={faq}
            ></Faq>
            <div class="absolute bottom-0 w-full bg-primary-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
                    ><path
                        fill="oklch(97% 0 0)"
                        fill-opacity="1"
                        d="M0,160L80,154.7C160,149,320,139,480,154.7C640,171,800,213,960,229.3C1120,245,1280,235,1360,229.3L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                    ></path></svg
                >
            </div>
        </section>
    </main>
    <footer class="bg-primary-500 text-neutral-100 z-0 px-[7%] md:px-[5%]">
        <div class="md:flex justify-between items-center md:px-12">
            <div class="md:w-1/4 pb-[6%] md:pb-[3%]">
                <div class="flex items-center mb-2">
                    <div>
                        <LogoIcon color={"oklch(97% 0 0)"} size={64}></LogoIcon>
                    </div>
                    <div class="text-5xl pl-2 font-extrabold">ESP</div>
                </div>
                <div>
                    <p class="text-xs">
                        Especialista em reparação, instalação e manutenção de
                        estores em Leiria. Prestamos um serviço rápido, profissional
                        e de confiança.
                    </p>
                </div>
            </div>
            <div class="pb-[6%] md:pb-0">
                <div class="flex items-center justify-center gap-4 pb-4">
                    <a href="tel:+351{phone}">
                        <div class="bg-action-300 px-8 py-2 rounded-full font-bold">
                            +351 {split(phone)}
                        </div>
                    </a>
                    <a href="https://wa.me/351{phone}">
                        <div class="w-10 h-10">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                ><g fill="none" fill-rule="evenodd"
                                    ><path
                                        d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                                    /><path
                                        fill="currentColor"
                                        d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2A1.01 1.01 0 0 0 3.8 21.454l3.032-.892A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2M9.738 14.263c2.023 2.022 3.954 2.289 4.636 2.314c1.037.038 2.047-.754 2.44-1.673a.7.7 0 0 0-.088-.703c-.548-.7-1.289-1.203-2.013-1.703a.71.71 0 0 0-.973.158l-.6.915a.23.23 0 0 1-.305.076c-.407-.233-1-.629-1.426-1.055s-.798-.992-1.007-1.373a.23.23 0 0 1 .067-.291l.924-.686a.71.71 0 0 0 .12-.94c-.448-.656-.97-1.49-1.727-2.043a.7.7 0 0 0-.684-.075c-.92.394-1.716 1.404-1.678 2.443c.025.682.292 2.613 2.314 4.636"
                                    />
                                </g>
                            </svg>
                        </div>
                    </a>
                </div>
                <div class="text-center">
                    <p class="font-bold">{mail}</p>
                </div>
            </div>
        </div>
    </footer>
    <div class="bg-action-300 py-1 px-4">
        <p class="text-xs text-neutral-100 text-center">Made with &hearts;</p>
    </div>
</div>

<style>
</style>
