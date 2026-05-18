export default function DietPlannerApp() {
  const weeklyPlans = {
    1: {
      day: "周一",
      type: "低碳休息",
      items: [
        ["7:00", "早餐", "全麦面包100g + 牛奶220ml + 茶叶蛋2个"],
        ["10:00", "加餐", "高蛋白酸奶200g + 香蕉1根"],
        ["12:00", "午餐", "鸡胸200g + 糙米80g（生重）+ 青菜"],
        ["16:00", "加餐", "酸奶1盒 + 坚果15g"],
        ["19:00", "晚餐", "牛肉/虾250g + 红薯100g + 青菜"],
        ["23:30", "睡觉", "保证恢复"]
      ]
    },
    2: {
      day: "周二",
      type: "低碳休息",
      items: [
        ["7:00", "早餐", "全麦面包100g + 牛奶220ml + 鸡蛋2个"],
        ["10:00", "加餐", "无糖酸奶200g"],
        ["12:00", "午餐", "牛肉200g + 糙米80g（生重）+ 青菜"],
        ["16:00", "加餐", "香蕉1根 + 即食鸡胸100g"],
        ["19:00", "晚餐", "虾仁250g + 土豆250g + 青菜"],
        ["23:30", "睡觉", "晚课后尽快休息"]
      ]
    },
    3: {
      day: "周三",
      type: "高碳训练",
      items: [
        ["7:00", "早餐", "全麦面包100g + 牛奶220ml + 鸡蛋3个 + 香蕉1根"],
        ["10:00", "加餐", "面包4片 + 酸奶1盒"],
        ["12:00", "午餐", "白米150g（生重）+ 牛肉200g + 青菜"],
        ["16:00", "加餐", "香蕉1根 + 即食鸡胸100g"],
        ["18:00", "训练前", "面包4片 + 香蕉1根"],
        ["19:30", "训练", "胸 + 肩 + 三头"],
        ["21:10", "训练后", "面条250g（熟重）+ 鸡胸200g"],
        ["23:50", "睡觉", "高碳恢复"]
      ]
    },
    4: {
      day: "周四",
      type: "中碳训练",
      items: [
        ["7:00", "早餐", "全麦面包100g + 牛奶220ml + 鸡蛋3个 + 香蕉1根"],
        ["10:00", "加餐", "高蛋白酸奶200g"],
        ["12:00", "午餐", "糙米100g（生重）+ 鸡胸200g + 青菜"],
        ["16:00", "加餐", "香蕉1根 + 鸡胸100g"],
        ["18:00", "训练前", "红薯150g + 鸡胸100g"],
        ["19:30", "训练", "背 + 后束 + 二头"],
        ["21:10", "训练后", "白米饭250g（熟重）+ 牛肉200g"],
        ["23:40", "睡觉", "保证恢复"]
      ]
    },
    5: {
      day: "周五",
      type: "低碳休息",
      items: [
        ["7:00", "早餐", "全麦面包100g + 牛奶220ml + 茶叶蛋2个"],
        ["10:00", "加餐", "高蛋白酸奶200g"],
        ["12:00", "午餐", "鸡胸200g + 糙米80g（生重）+ 青菜"],
        ["16:00", "加餐", "香蕉1根"],
        ["19:00", "晚餐", "牛肉250g + 红薯100g + 青菜"],
        ["23:30", "睡觉", "晚课后尽快休息"]
      ]
    },
    6: {
      day: "周六",
      type: "高碳训练",
      items: [
        ["7:30", "早餐", "全麦面包100g + 牛奶220ml + 鸡蛋3个 + 香蕉1根"],
        ["10:30", "加餐", "面包4片 + 酸奶1盒"],
        ["12:30", "午餐", "白米150g（生重）+ 牛肉200g + 青菜"],
        ["16:00", "加餐", "香蕉1根 + 鸡胸100g"],
        ["18:00", "训练前", "面包4片 + 香蕉1根"],
        ["19:30", "训练", "腿 + 腹"],
        ["21:10", "训练后", "面条250g（熟重）+ 鸡胸200g"],
        ["23:50", "睡觉", "高碳恢复"]
      ]
    },
    0: {
      day: "周日",
      type: "中低碳恢复",
      items: [
        ["8:00", "早餐", "全麦面包100g + 牛奶220ml + 鸡蛋3个"],
        ["11:00", "加餐", "高蛋白酸奶200g + 香蕉1根"],
        ["13:00", "午餐", "糙米100g（生重）+ 牛肉200g + 青菜"],
        ["16:00", "恢复", "散步 + 拉伸"],
        ["19:00", "晚餐", "虾仁250g + 土豆250g + 青菜"],
        ["23:00", "睡觉", "为周一恢复"]
      ]
    }
  };

  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = React.useState(today);

  const selectedDay = new Date(selectedDate).getDay();
  const currentPlan = weeklyPlans[selectedDay];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
          <h1 className="text-3xl font-bold mb-2">教师减脂饮食计划</h1>
          <p className="text-gray-500 mb-6">选择日期查看当天饮食与训练安排</p>

          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border rounded-xl px-4 py-2 text-lg"
          />
        </div>

        {currentPlan ? (
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold">{currentPlan.day}</h2>
                <p className="text-gray-500 text-lg">{currentPlan.type}</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200 text-left">
                    <th className="p-3 rounded-l-xl">时间</th>
                    <th className="p-3">安排</th>
                    <th className="p-3 rounded-r-xl">内容</th>
                  </tr>
                </thead>
                <tbody>
                  {currentPlan.items.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-4 font-semibold">{item[0]}</td>
                      <td className="p-4">{item[1]}</td>
                      <td className="p-4">{item[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-xl p-10 text-center text-gray-500 text-xl">
            当前日期暂无计划
          </div>
        )}
      </div>
    </div>
  );
}
