import { useRef, useState } from "react";

export default function useHeaderModal() {
    const [produto, setProduto] = useState<number>()
    const modalRefs = useRef<Array<HTMLDivElement | HTMLAnchorElement | null>>([]);

    return {produto, setProduto, modalRefs}
}