import Container from '@/components/layout/Container'
import { pageShellClass, sectionYClass } from '@/components/layout/Container'
import { cn } from '@/lib/cn'

/** Shared wrapper for long-form legal / policy pages */
export default function PolicyPageShell({ children, className }) {
  return (
    <div className={cn(pageShellClass, className)}>
      <Container variant="narrow" className={cn(sectionYClass, 'pb-24')}>
        {children}
      </Container>
    </div>
  )
}
