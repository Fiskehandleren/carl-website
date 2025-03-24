import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: false,
})
export class ExperienceComponent {
  step = 0;

  experiences = [
    {
      company: 'Halfspace',
      role: 'Data Scientist',
      icon: 'rocket',
      tasks: [
        'Tech Lead for multiple end-to-end data science projects',
        'Co-author of inhouse Mix Media Modelling framework',
      ],
    },
    {
      company: 'DSV',
      role: 'Data Science Graduate',
      icon: 'local_shipping',
      tasks: [
        'Maintained Transformer-based models in production to do named-entity recognition in unstructured data and document classification',
      ],
    },
    {
      company: 'Danske Bank',
      role: 'Student Data Scientist',
      icon: 'settings_suggest',
      tasks: [
        'Performing customer segmentation using machine learning techniques',
      ],
    },
    {
      company: 'Danske Bank',
      role: 'Student Quant',
      icon: 'account_balance',
      tasks: [
        'Implemented crash detection of the nightly batch-jobs calculating valuations and risk for desks, clients and the Danish FSA, resulting in less delays in deliveries',
        'Simplified risk and value calculations delivered to Market Risk, resulting in faster calculations and a simplified code-base',
        'Participated in the nightly calculation batch on-call rotation',
      ],
    },
    {
      company: 'Danske Bank',
      role: 'Student Software Engineer',
      icon: 'terminal',
      tasks: [
        'Completed an MVP frontend solution in Angular, to be used by case-handlers to process anti-money laundering cases for the whole bank',
        'Developed customer anti-money laundering questionnaires in C#, deployed a customer frontend in Angular and setup CI/CD for both solutions',
        'Participated in the nightly calculation batch on-call rotation',
      ],
    },
    {
      company: 'GreenMobility',
      role: 'IT Student',
      icon: 'electric_car',
      tasks: [
        'Was the only developer in the company, leading to me being responsible for software development and architecture',
        'Developed various tools utilised by customer support to reduce the amount of manual labour, and infrastructure to enable customer subscriptions',
        'Developed data-visualization dashboards for various departments',
      ],
    },
  ];

  public setStep(index: number): void {
    this.step = index;
  }

  public nextStep(): void {
    this.step++;
  }

  public prevStep(): void {
    this.step--;
  }
}
