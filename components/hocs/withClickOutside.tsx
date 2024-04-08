import { IWrappedComponentsProps } from '@/types/hocs';
import { 
  ForwardRefExoticComponent,
  MutableRefObject,
  RefAttributes,
  useEffect,
  useRef,
  useState
} from 'react';

// Компонента, возвращающая компоненту
export function withClickOutside (WrappedComponent: ForwardRefExoticComponent<IWrappedComponentsProps & RefAttributes<HTMLDivElement>>) {
  const Component = () => {
    const [ open, setOpen] = useState(false);
    const ref = useRef() as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (!ref.current.contains(event.target as HTMLDivElement)) {
          setOpen(false);
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside), [ref]
      }
    })

    return <WrappedComponent open={open} setOpen={setOpen} ref={ref} />;
  }

  return Component;
}