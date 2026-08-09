export function getTechIcon(tech: string): string | null {
  const t = tech.toLowerCase();
  
  if (t.includes('java') && !t.includes('javascript')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg';
  if (t.includes('javascript')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg';
  if (t.includes('typescript')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg';
  if (t.includes('python')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg';
  if (t.includes('php')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg';
  if (t.includes('mysql')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg';
  if (t.includes('django')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg';
  if (t.includes('react')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg';
  if (t.includes('spring')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg';
  if (t.includes('docker')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg';
  if (t.includes('kafka')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg';
  if (t.includes('html') || t.includes('css')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg';
  if (t.includes('opencv')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg';
  
  return null;
}
