export default function CartItem({ item }: { item: any }) {
  return (
    <div className="flex justify-between items-center border-b pb-2">
      <div>
        <p className="font-medium">{item.name}</p>
        <p className="text-sm">Qty: {item.quantity}</p>
      </div>
      <p>${(item.price * item.quantity).toFixed(2)}</p>
    </div>
  );
}
