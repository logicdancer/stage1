import yfinance as yf # type: ignore
import os
from typing import Dict, Any

def get_stock_info(stock_code: str) -> Dict[str, Any]:
    """
    获取股票信息
    Args:
        stock_code (str): 股票代码，例如：'AAPL' 或 '600519.SS'（上海）或 '0700.HK'（香港）
    
    Returns:
        Dict[str, Any]: 包含股票信息的字典
    """
    try:
        # 创建股票对象
        stock = yf.Ticker(stock_code)
        
        # 获取基本信息
        info = stock.info 
        
        # 获取最近的历史数据
        hist = stock.history(period="1d")
        
        # 整理返回数据
        stock_data = {
            "代码": stock_code,
            "名称": info.get("longName", ""),
            "当前价格": info.get("currentPrice", 0),
            "最新价格": hist["Close"].iloc[-1] if not hist.empty else 0,
            "开盘价": info.get("open", 0),
            "最高价": info.get("dayHigh", 0),
            "最低价": info.get("dayLow", 0),
            "成交量": info.get("volume", 0),
            "空仓数量": info.get("sharesShort", 0),
            "市值": f"{info.get('marketCap', 0):,} {info.get('currency', '')}" if info.get("marketCap") else "0",
            "市盈率": info.get("trailingPE", 0),
            "股息率": info.get("dividendYield", 0),
            "行业": info.get("industry", ""),
            # 增加5日,10日,20日,30日,60日移动平均线
            "5日均线": round(stock.history(period="65d")["Close"].rolling(window=5).mean().iloc[-1], 2) if not stock.history(period="65d")["Close"].empty else 0,
            "10日均线": round(stock.history(period="65d")["Close"].rolling(window=10).mean().iloc[-1], 2) if not stock.history(period="65d")["Close"].empty else 0,
            "20日均线": round(stock.history(period="65d")["Close"].rolling(window=20).mean().iloc[-1], 2) if not stock.history(period="65d")["Close"].empty else 0,
            "30日均线": round(stock.history(period="65d")["Close"].rolling(window=30).mean().iloc[-1], 2) if not stock.history(period="65d")["Close"].empty else 0,
            "60日均线": round(stock.history(period="65d")["Close"].rolling(window=60).mean().iloc[-1], 2) if not stock.history(period="65d")["Close"].empty else 0,
            # 增加成交量较上一日的变量率
            "成交量变动率": round(
                ((stock.history(period="2d")["Volume"].iloc[-1] - stock.history(period="2d")["Volume"].iloc[-2]) / stock.history(period="2d")["Volume"].iloc[-2] * 100), 2
            ) if len(stock.history(period="2d")["Volume"]) >= 2 and stock.history(period="2d")["Volume"].iloc[-2] != 0 else 0,
            # # 增加换手率
            "换手率": (
                round(
                    (info.get("volume", 0) / info.get("sharesOutstanding", 0) * 100), 2
                ) if info.get("volume", 0) and info.get("sharesOutstanding", 0) else 0
            ),
            # 增加看涨期权和看跌期权成交量
            "看涨期权成交量": (
                sum([c.get("volume", 0) for c in stock.option_chain(stock.options[0]).calls.to_dict("records")])
                if hasattr(stock, "option_chain") and stock.options else 0
            ),
            "看跌期权成交量": (
                sum([p.get("volume", 0) for p in stock.option_chain(stock.options[0]).puts.to_dict("records")])
                if hasattr(stock, "option_chain") and stock.options else 0
            ),
             "最后更新": info.get("lastUpdate", "")
        }
        
        return stock_data
        
    except Exception as e:
        raise Exception(f"获取股票信息失败: {str(e)}")

        # 定义一个执行的主方法
def main():
    stock_code = input("请输入股票代码如: ")
    try:
        info = get_stock_info(stock_code)
        # 将股票信息写入Excel文件
        # df = pd.DataFrame([info])
        # excel_filename = f"{stock_code}_info.xlsx"
        # df.to_excel(excel_filename, index=False)
        # print(f"股票信息已写入文件: {excel_filename}")
        for key, value in info.items():
            print(f"{key}: {value}")
    except Exception as e:
        print(str(e))

if __name__ == "__main__":
    # proxy = 'http://127.0.0.1:7890'	# 代理设置，此处修改
    # os.environ['HTTP_PROXY'] = proxy 
    # os.environ['HTTPS_PROXY'] = proxy 
    main()
