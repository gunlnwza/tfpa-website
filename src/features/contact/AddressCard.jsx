import Heading from "../../components/ui/Heading"
import Paragraph from "../../components/ui/Paragraph"

export default function AddressCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col justify-between gap-6">
      <div className="space-y-1">
        <Heading level={2}>ข้อมูลการติดต่อ</Heading>
        <Paragraph>สมาคมนักวางแผนการเงินไทย (TFPA)</Paragraph>
      </div>
      <address className="not-italic text-sm text-gray-600 leading-relaxed">
        ชั้น 6 อาคารตลาดหลักทรัพย์แห่งประเทศไทย<br />
        93 ถนนรัชดาภิเษก แขวงดินแดง เขตดินแดง<br />
        กรุงเทพมหานคร 10400
      </address>
      <div className="space-y-1 text-sm">
        <a href="mailto:info@tfpa.or.th" className="flex items-center gap-2 text-gray-700 hover:text-brand-bright">
          <span>✉️</span> info@tfpa.or.th
        </a>
        <a href="tel:020099393" className="flex items-center gap-2 text-gray-700 hover:text-brand-bright">
          <span>📞</span> 0 2009 9393
        </a>
      </div>
    </div>
  )
}
