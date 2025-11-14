import ProjectTemplate from '@/components/project-template';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Connect 5 Game | Zisis Kostakakis',
  description: 'Java Game with Graphical User Interface and AI Implementation.',
};

export default function Connect5() {
  const project = {
    id: 'connect-5',
    href: '/Connect-5',
    title: 'Connect 5 Java Game',
    description: 'Java Game with Graphical User Interface and AI Implementation.',
    longDescription: `Connect-Five is a strategic two-player board game similar to tic-tac-toe, featuring an 8-column by 7-row vertical board. Players take turns placing colored pieces (typically black and red) with the goal of being the first to align five pieces horizontally, vertically, or diagonally.

The game implements a sophisticated AI opponent using the minimax algorithm with alpha-beta pruning optimization, providing challenging gameplay at multiple difficulty levels. The vertical board design adds a unique twist where pieces drop to the lowest available position in each column, creating strategic depth and requiring players to think several moves ahead.

Built with Java and Swing, the game features a polished graphical user interface that makes gameplay intuitive and enjoyable. The AI implementation showcases advanced game theory concepts and provides an excellent demonstration of algorithmic problem-solving in game development.`,
    githubUrl: 'https://github.com/ZisisKostakakis/Connect-5-game',
    technologies: [
      'Java',
      'Swing',
      'AI/ML',
      'Minimax Algorithm',
      'Alpha-Beta Pruning',
      'Game Theory',
    ],
    category: 'Game Development',
    date: '2023',
    features: [
      'Custom graphical user interface using Java Swing',
      'Intelligent AI opponent with minimax algorithm',
      'Alpha-beta pruning for optimal move calculation',
      'Multiple difficulty levels',
      'Two-player mode support',
      'Win detection for horizontal, vertical, and diagonal alignments',
      'Smooth piece dropping animations',
      'Strategic gameplay with depth and complexity',
    ],
    screenshots: [
      {
        src: '/images/Connect-5-one.png',
        alt: 'Connect 5 Game - Main Gameplay',
        caption: 'Active Game Session',
      },
      {
        src: '/images/Connect-5-two.png',
        alt: 'Connect 5 Game - AI Move',
        caption: 'AI Opponent in Action',
      },
    ],
  };

  return <ProjectTemplate project={project} />;
}
