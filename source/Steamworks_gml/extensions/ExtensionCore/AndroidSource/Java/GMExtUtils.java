package ${YYAndroidPackageName};
import com.yoyogames.runner.RunnerJNILib;

public class GMExtUtils
{
	public static String GetExtensionOption(String extName, String optName) {
		return RunnerJNILib.extOptGetString(extName, optName);
	}

	public static String GetExtensionVersion(String extName) {
		return RunnerJNILib.extGetVersion(extName);
	}
}