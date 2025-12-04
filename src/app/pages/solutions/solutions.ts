import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { CtaSection } from '../../components/cta-section/cta-section';
import { ActivatedRoute } from '@angular/router';

interface ServiceProduct {
  title: string;
  description: string;
  whatsappMessage: string;
  image: string;
}

@Component({
  selector: 'app-solutions',
  imports: [CommonModule, CtaSection],
  templateUrl: './solutions.html',
  styleUrl: './solutions.scss',
})
export class Solutions implements AfterViewInit {
  private readonly whatsappNumber = '5551995798694';

  aidServices: ServiceProduct[] = [
    {
      title: 'Atendimento em Academias',
      description: 'Capacitação para instrutores lidarem com quedas, lesões e mal súbito.',
      whatsappMessage: 'Olá, gostaria de saber mais sobre Primeiros Socorros para Academias.',
      image: 'assets/images/train/academia.jpg'
    },
    {
      title: 'Escolas (Lei Lucas)',
      description: 'Treinamento obrigatório para professores: engasgo, alergias e traumas.',
      whatsappMessage: 'Olá, preciso adequar minha escola à Lei Lucas. Gostaria de um orçamento.',
      image: 'assets/images/train/escola.jpg'
    },
    {
      title: 'Ambiente Corporativo',
      description: 'Prepare sua equipe para acidentes de trabalho e emergências médicas.',
      whatsappMessage: 'Olá, gostaria de cotar um treinamento de primeiros socorros in-company.',
      image: 'assets/images/train/trabalho.jpg'
    },
    {
      title: 'Restaurantes e Cozinhas',
      description: 'Foco em manobra de Heimlich (engasgo), queimaduras e cortes.',
      whatsappMessage: 'Olá, tenho interesse no treinamento focado em restaurantes.',
      image: 'assets/images/train/restaurante.jpg'
    },
    {
      title: 'Eventos e Igrejas',
      description: 'Gestão de multidões e atendimento inicial para grandes aglomerações.',
      whatsappMessage: 'Olá, preciso treinar a equipe de recepção do meu evento/igreja.',
      image: 'assets/images/train/evento.jpg'
    },
    {
      title: 'Projeto Safe Teen Brasil',
      description: 'Programa educativo para jovens (10-17 anos) sobre prevenção e socorro.',
      whatsappMessage: 'Olá, gostaria de saber mais sobre o Projeto Safe Teen Brasil.',
      image: 'assets/images/train/safeteen.jpg'
    },
  ];

  healServices: ServiceProduct[] = [
    {
      title: 'Palestras e Workshops',
      description: 'Qualidade de vida, gestão de estresse e comunicação não-violenta.',
      whatsappMessage: 'Olá, gostaria de verificar disponibilidade para uma palestra de saúde mental.',
      image: 'assets/images/heal/palestra.jpg'
    },
    {
      title: 'Práticas Integrativas (PICS)',
      description: 'Mindfulness, Auriculoterapia e Terapia Floral no trabalho.',
      whatsappMessage: 'Olá, gostaria de entender como funcionam as PICS para empresas.',
      image: 'assets/images/heal/praticas.jpg'
    },
    {
      title: 'Programas de Bem-estar',
      description: 'Diagnóstico e calendário anual de ações para redução de absenteísmo.',
      whatsappMessage: 'Olá, estou buscando um programa contínuo de bem-estar corporativo.',
      image: 'assets/images/heal/programas.jpg'
    },
  ];

  trainServices: ServiceProduct[] = [
    {
      title: 'NR 01 - Gestão de Riscos',
      description: 'Gerenciamento de riscos (GRO) e fatores psicossociais.',
      whatsappMessage: 'Olá, preciso de consultoria sobre a NR 01 e o GRO.',
      image: 'assets/images/fire/inspecao.jpg'
    },
    {
      title: 'NR 23 - Brigada de Incêndio',
      description: 'Formação de brigadistas para combate a incêndio e evacuação.',
      whatsappMessage: 'Olá, gostaria de orçamento para formação de Brigada de Incêndio.',
      image: 'assets/images/fire/brigadas.jpg'
    },
    {
      title: 'NR 35 - Trabalho em Altura',
      description: 'Capacitação obrigatória para atividades acima de 2 metros.',
      whatsappMessage: 'Olá, preciso certificar minha equipe na NR 35.',
      image: 'assets/images/fire/industria.jpg'
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit() {
    const section = this.route.snapshot.paramMap.get('section');

    if (section) {
      this.switchTab(section);
    }
  }

  switchTab(sectionId: string) {
    const tabId = `tab-${sectionId}`; 
    
    const tabButton = document.getElementById(tabId);
    
    if (tabButton) {
      tabButton.click();
      
      tabButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  getWhatsappLink(message: string): string {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
  }
}