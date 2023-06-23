import {createClient} from "@supabase/supabase-js";
import {anonKey, configValue} from "@/utils/constants.ts";

export const supabase = createClient(
	configValue,
	anonKey,
)
