import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import type { Category } from "../types/community";
import { CATEGORIES } from "../types/community";

interface PostWriteFormValues {
  title: string;
  category: Category;
  content: string;
}

function PostWritePage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<PostWriteFormValues>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      title: "",
      category: CATEGORIES.filter((cat) => cat !== "전체")[0],
      content: "",
    },
  });

  const onSubmit = (data: PostWriteFormValues) => {
    // TODO: API 호출하여 게시글 작성
    console.log("글 작성:", data);

    // 작성 완료 후 커뮤니티로 이동
    alert("게시글이 작성되었습니다!");
    navigate("/community");
  };

  return (
    <div className="w-[70%] max-w-4xl mx-auto px-4 py-8">
      {/* 헤더 */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">글 작성</h1>
      </div>

      {/* 작성 폼 */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          {/* 카테고리 선택 */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              카테고리 <span className="text-red-500">*</span>
            </label>
            <select
              {...register("category", { required: "카테고리를 선택하세요" })}
              className="w-full px-3 py-2 border text-[#333] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-main-orange focus:border-transparent"
            >
              {CATEGORIES.filter((cat) => cat !== "전체").map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="mt-1 text-xs text-red-500">
                {errors.category.message}
              </p>
            )}
          </div>

          {/* 제목 */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              제목 <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              placeholder="제목을 입력하세요"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-main-orange focus:border-transparent text-gray-900"
              register={register("title", {
                required: "제목을 입력하세요",
                minLength: {
                  value: 2,
                  message: "제목은 최소 2자 이상이어야 합니다",
                },
                maxLength: {
                  value: 100,
                  message: "제목은 최대 100자까지 가능합니다",
                },
              })}
              errorMessage={errors.title?.message}
            />
          </div>

          {/* 내용 */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              내용 <span className="text-red-500">*</span>
            </label>
            <textarea
              {...register("content", {
                required: "내용을 입력하세요",
                minLength: {
                  value: 10,
                  message: "내용은 최소 10자 이상이어야 합니다",
                },
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-main-orange focus:border-transparent resize-none text-gray-900"
              rows={15}
              placeholder="내용을 입력하세요"
            />
            {errors.content && (
              <p className="mt-1 text-xs text-red-500">
                {errors.content.message}
              </p>
            )}
          </div>
        </div>

        {/* 버튼 */}
        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => navigate("/community")}
            className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            취소
          </button>
          <button
            type="submit"
            disabled={!isValid}
            className="px-6 py-2.5 text-sm font-medium text-white bg-main-orange rounded-lg hover:bg-main-orange/90 transition-colors disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
          >
            작성완료
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostWritePage;
