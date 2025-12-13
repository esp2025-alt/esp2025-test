<script lang="ts">
    import { fly } from "svelte/transition";
    import WwdCard from "./WwdCard.svelte";
    import { quintInOut } from "svelte/easing";

    let {
        title = "",
        description = "",
    } = $props();
</script>

<div class="pb-[7%]">
    <div class="text-center pb-[7%] md:pb-[4%]">
        <h3 class="sub-title">
            { title }
        </h3>
    </div>
    <div class="md:px-24 flex w-full items-center">
        <div class="w-full h-full">
            <div class="md:grid grid-cols-3 gap-[3%] w-full">
                <WwdCard
                    id={1}
                    title={"Estores Manuais"}
                    imgurl={"images/manual.jpg"}
                    desc = "
                        A nossa equipa é especializada na instalação e reparação de estores manuais para residências e empresas. Quer precise de instalar estores novos 
                        ou de restaurar os existentes para um funcionamento suave, os nossos profissionais qualificados garantem um trabalho fiável e resultados duradouros. 
                        Lidamos com todos os tipos de sistemas manuais, utilizando materiais duráveis adequados ao estilo 
                        e necessidades da sua propriedade. Desde a substituição de componentes gastos até à correção de problemas de alinhamento, focamo-nos na precisão e segurança. 
                        O nosso objetivo é fornecer estores manuais que funcionem sem esforço, melhorem a privacidade e aumentem a proteção."
                ></WwdCard>
                <WwdCard
                    id={2}
                    title={"Estores Eletricos"}
                    imgurl={"images/placeholder.jpg"}
                    desc = "
                        Oferecemos serviços especializados de instalação e reparação de estores elétricos, proporcionando conveniência moderna e segurança fiável à sua propriedade. 
                        Os nossos técnicos trabalham com sistemas motorizados avançados, garantindo uma integração perfeita com a sua configuração elétrica atual. 
                        Quer esteja a fazer uma atualização de persianas manuais ou a instalar unidades elétricas pela primeira vez, tratamos o processo com eficiência e atenção ao detalhe. 
                        Para reparações, diagnosticamos problemas como falhas no motor, problemas de cablagem, avarias no controlo remoto e erros de sensores, 
                        fornecendo soluções rápidas e eficazes. Com componentes de alta qualidade e precisão profissional, garantimos que as suas persianas elétricas funcionam de forma silenciosa, suave e segura."
                ></WwdCard>
                <WwdCard
                    id={3}
                    title={"Estores Interiores e Exteriores"}
                    imgurl={"images/exterior.jpg"}
                    desc="
                        A nossa empresa oferece serviços abrangentes de instalação e reparação para portadas exteriores e interiores, adaptados para corresponder às necessidades estéticas 
                        e funcionais do seu espaço. Instalamos persianas feitas de uma grande variedade de materiais — madeira, alumínio, PVC e mais — garantindo durabilidade e estilo. 
                        Quer seja a melhorar o apelo exterior com portadas exteriores ou a adicionar charme e privacidade no interior, os nossos especialistas garantem um ajuste impecável.
                        Para reparações, tratamos de questões como painéis danificados, ferragens partidas, acabamentos desbotados e desalinhamento, restaurando as suas persianas ao estado ideal."
                ></WwdCard>
            </div>
        </div>
    </div>
</div>