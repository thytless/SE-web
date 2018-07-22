package com.seweb.backend.framework.utils.string;

import java.util.List;

public class StringUtil
{
	public static boolean isEmpty(String s)
	{
		return s == null || "".equals(s);
	}

	public static boolean hasString(List<String> stringList, String string) {
		if(stringList == null || isEmpty(string))
			return false;
		for (String s : stringList) {
			if(s.equals(string))
				return true;
		}
		return false;
	}
}

