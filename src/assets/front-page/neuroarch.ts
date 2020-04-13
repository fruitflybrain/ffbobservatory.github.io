import { FFBODescription } from '../../app/front-page/ffbo-description'
export const NEUROARCH: FFBODescription = {
  title: 'NeuroArch',
  shortText: 'Graph-based database for biological & circuit data storage.',
  mainText: [
    'NeuroArch provides a common interface for defining, querying, and manipulating',
    'integrated stored model data, potentially developed by multiple independent parties',
    'at multiple levels of structural abstraction, using the object-graph mapping (OGM) approach.',
    '\n',
    'Neuroarch offers to fly brain modelers similar advantages to those provided by',
    'object-relational mapping (ORM) software to web application developers, including:',
    '1) enabling model developers to focus on constructing the architectural structure of',
    'fly brain models and not worry about how the models are stored in a database or file, 2)',
    'reduces the need to write explicit (and complex) database queries when interacting with brain',
    'models, 3) allows performing rich queries on model data at different levels of abstraction via',
    'an object-oriented interface. Neuroarch`s power stems from its storage of both highly detailed',
    'low-level modeling components (such as neurons and synapses) and higher level structural',
    'abstractions (such as canonical circuits, LPUs, and inter-LPU connectivity patterns) in a single',
    'graph database. Neuroarch is built upon ...'
  ].join(''),
  url: 'http://neurokernel.github.io/rfc/nk-rfc5.pdf',
  publication: 'https://zenodo.org/record/44225',
  img: 'assets/front-page/img/neuroarch.png'
};
