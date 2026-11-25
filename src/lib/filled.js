// 데이터에 빈칸('')으로 남겨 둔 항목은 화면·인쇄에서 뺀다
export const filled = list => (list || []).filter(x => (typeof x === 'string' ? x.trim() : x))
