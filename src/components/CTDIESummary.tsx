import React from "react";
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import ExpandableHighlight from "./ExpandableHighlight";

type Props = {
  embedded?: boolean;
};

function CTDIESummary({ embedded = false }: Props) {
  return (
    <ExpandableHighlight
      id="ctdie"
    //   eyebrow="Honra · CBIE 2012"
     title=""
    //   subtitle="Concurso de TCC, Dissertações e Teses do 1º Congresso Brasileiro de Informática na Educação."
    //   meta="Concedido por: Congresso Brasileiro de Informática na Educação · dez/2012"
      icon={<EmojiEventsRoundedIcon fontSize="small" />}
      summaryLabel="Saiba mais"
      embedded={embedded}
      body={(
        <>
          <p>
            O CTD-IE seleciona e premia as três melhores teses, dissertações e TCC em Informática na Educação. O processo ocorre em três fases:
          </p>
          <ul>
            <li><strong>Fase 1:</strong> triagem de artigos por ao menos três especialistas para escolher 6 finalistas de cada categoria.</li>
            <li><strong>Fase 2:</strong> avaliação do texto completo de cada trabalho por novo comitê, mantendo o formato original.</li>
            <li><strong>Fase 3:</strong> apresentação oral; qualidade da exposição compõe a nota final.</li>
          </ul>
          <p>Os trabalhos aceitos são publicados nos anais do CBIE e apresentados no evento; ao final, o comitê define os três premiados por categoria.</p>
        </>
      )}
    />
  );
}

export default CTDIESummary;
